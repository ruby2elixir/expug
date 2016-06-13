defmodule ExpugCompilerTest do
  use ExUnit.Case

  import Expug.Tokenizer, only: [tokenize: 1]
  import Expug.Compiler, only: [compile: 1]
  import TestUtils, only: [sort: 1]

  test "doctype only" do
    {:ok, tokens} = tokenize("doctype html5")
    {:ok, ast} = compile(tokens)
    assert %{
      doctype: %{
        token: {8, :doctype, "html5"},
        type: :doctype,
        value: "html5"
      },
      type: :document
    } = ast
  end

  test "tag only" do
    {:ok, tokens} = tokenize("div")
    {:ok, ast} = compile(tokens)
    assert %{
      type: :document,
      children: [%{
        name: "div",
        type: :element
      }]
    } = ast
  end

  test "doctype and tag" do
    {:ok, tokens} = tokenize("doctype html5\ndiv")
    {:ok, ast} = compile(tokens)
    assert %{
      doctype: %{
        type: :doctype,
        value: "html5",
        token: _
      },
      type: :document,
      children: [%{
        name: "div",
        type: :element
      }]
    } = ast
  end

  test "doctype and tag and id" do
    {:ok, tokens} = tokenize("doctype html5\ndiv#box")
    {:ok, ast} = compile(tokens)
    assert %{
      doctype: %{
        type: :doctype,
        value: "html5",
        token: _
      },
      type: :document,
      children: [%{
        id: "box",
        name: "div",
        type: :element
      }]
  } = ast
  end

  test "tag and classes" do
    {:ok, tokens} = tokenize("div.blue.small")
    {:ok, ast} = compile(tokens)
    assert %{
      type: :document,
      children: [%{
        name: "div",
        type: :element,
        class: ["blue", "small"]
      }]
    } = ast
  end

  test "buffered text" do
    {:ok, tokens} = tokenize("div= hello")
    {:ok, ast} = compile(tokens)
    assert %{
      type: :document,
      children: [%{
        name: "div",
        type: :element,
        children: [%{
          type: :buffered_text,
          value: "hello"
        }]
      }]
    } = ast
  end

  test "doctype and tags" do
    {:ok, tokens} = tokenize("doctype html5\ndiv\nspan")
    {:ok, ast} = compile(tokens)
    assert %{
      doctype: %{
        type: :doctype,
        value: "html5",
        token: {8, :doctype, "html5"}
      },
      type: :document,
      children: [%{
        name: "div",
        type: :element
      }, %{
        name: "span",
        type: :element
      }]
    } = ast
  end

  test "nesting" do
    {:ok, tokens} = tokenize("head\n  title")
    {:ok, ast} = compile(tokens)
    assert %{
      type: :document,
      children: [%{
        name: "head",
        type: :element,
        children: [%{
          name: "title",
          type: :element
        }]
      }]
    } = ast
  end

  test "nesting deeper" do
    {:ok, tokens} = tokenize("head\n  title\n    span")
    {:ok, ast} = compile(tokens)
    assert %{
      type: :document,
      children: [%{
        name: "head",
        type: :element,
        children: [%{
          name: "title",
          type: :element,
          children: [%{
            name: "span",
            type: :element
          }]
        }]
      }]
    } = ast
  end

  test "zigzag nesting" do
    {:ok, tokens} = tokenize("head\n  title\n    span\n  meta")
    {:ok, ast} = compile(tokens)
    assert %{
      type: :document,
      children: [%{
        type: :element,
        name: "head",
        children: [%{
          type: :element,
          name: "title",
          children: [%{
            name: "span",
            type: :element
          }]
        }, %{
          name: "meta",
          type: :element
        }]
      }]
    } = ast
  end

  test "zigzag nesting error" do
    {:ok, tokens} = tokenize("head\n  title\n    span\n meta")
    {:error, type, token} = compile(tokens)
    assert type == :ambiguous_indentation
    assert token == {23, :element_name, "meta"}
  end

  test "attributes" do
    {:ok, tokens} = tokenize("div(style: 'color: blue')")
    {:ok, ast} = compile(tokens)
    assert ast ==
      %{ type: :document,
        children:
        [ %{ attributes:
            [ %{ type: :attribute,
                key: "style",
                val: "'color: blue'" } ],
            name: "div",
            type: :element } ] }
  end

  test "2 attributes" do
    {:ok, tokens} = tokenize("div(id: 'box' style: 'color: blue')")
    {:ok, ast} = compile(tokens)
    assert ast ==
      %{ type: :document,
        children:
        [ %{ attributes:
            [ %{ type: :attribute,
                key: "id",
                val: "'box'" },
              %{ type: :attribute,
                key: "style",
                val: "'color: blue'" } ],
            name: "div",
            type: :element } ] }
  end

  test "dupe attributes" do
    {:ok, tokens} = tokenize("div(src=1 src=2)")
    {:ok, ast} = compile(tokens)
    assert ast ==
      %{ type: :document,
        children:
        [ %{ attributes:
            [ %{ type: :attribute,
                key: "src",
                val: "1" },
              %{ type: :attribute,
                key: "src",
                val: "2" } ],
            name: "div",
            type: :element } ] }
  end
end
