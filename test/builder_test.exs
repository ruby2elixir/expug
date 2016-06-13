defmodule BuilderTest do
  use ExUnit.Case
  doctest Expug.Builder

  def build(source) do
    {:ok, tokens} = Expug.Tokenizer.tokenize(source)
    {:ok, ast} = Expug.Compiler.compile(tokens)
    Expug.Builder.build(ast)
  end

  test "build" do
    {:ok, eex} = build("doctype html\ndiv Hello")
    assert eex == %{
      :lines => 2,
      1 => ["<!doctype html>"],
      2 => ["<div>", "Hello", "</div>"]
    }
  end

  test "single element" do
    {:ok, eex} = build("div")
    assert eex == %{
      :lines => 1,
      1 => ["<div>", "</div>"]
    }
  end

  test "single element with attributes" do
    {:ok, eex} = build("div(id=foo)")
    assert eex == %{
      :lines => 1,
      1 => ["<div id=<%= Expug.Runtime.attr_value(foo) %>>", "</div>"]
    }
  end

  test "with buffered text" do
    {:ok, eex} = build("div= hola()")
    assert eex == %{
      :lines => 1,
      1 =>["<div>", "<%= hola() %>", "</div>"]
    }
  end

  test "nesting" do
    {:ok, eex} = build("""
    doctype html
    div
      span= @hello
    """)
    assert eex == %{
      :lines => 3,
      1 =>["<!doctype html>"],
      2 =>["<div>"],
      3 =>["<span>", "<%= @hello %>", "</span>", "</div>"]
    }
  end
end