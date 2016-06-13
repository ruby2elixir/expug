defmodule StringifierTest do
  use ExUnit.Case

  def build(source) do
    {:ok, tokens} = Expug.Tokenizer.tokenize(source)
    {:ok, ast} = Expug.Compiler.compile(tokens)
    {:ok, lines} = Expug.Builder.build(ast)
    Expug.Stringifier.stringify(lines)
  end

  test "nesting" do
    {:ok, eex} = build("""
    doctype html
    div
      span= @hello
    """)

    assert eex == ~S"""
    <!doctype html>
    <div>
    <span><%= "\n" %><%= @hello %><%= "\n" %></span><%= "\n" %></div>
    """
  end

  test "with extra lines" do
    {:ok, eex} = build("""
    doctype html


    div
      span= @hello
    """)

    assert eex == ~S"""
    <!doctype html>
    <%

    %><div>
    <span><%= "\n" %><%= @hello %><%= "\n" %></span><%= "\n" %></div>
    """
  end

  test "with extra lines, 2" do
    {:ok, eex} = build("""
    doctype html

    div

      span= @hello
    """)

    assert eex == ~S"""
    <!doctype html>
    <%
    %><div>
    <%
    %><span><%= "\n" %><%= @hello %><%= "\n" %></span><%= "\n" %></div>
    """
  end
end