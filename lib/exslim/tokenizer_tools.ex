defmodule Exslim.TokenizerTools do
  @moduledoc """
  For tokenizers.

      def tokenizer(str)
        run_tokenizer(str, &(document(&1))
      end

      def document(state)
        eat state, ~r/.../, &(&1 ++ [{&3, :document, &2}])
      end
  """
  def run_tokenizer(str, fun) do
    state = {[], str, 0}
    state = fun.(state)
    {doc, _, position} = state

    # Guard against unexpected end-of-file
    if position != String.length(str) do
      {:error, {:parse_error, position, [:eof]}}
    else
      {:ok, doc}
    end
  end

  def one_of(state, funs) do
    { _, _, pos } = state
    die = fn _ -> throw {:parse_error, pos} end
    Enum.reduce funs ++ [die], state, fn fun, acc ->
      try do
        acc || fun.(state)
      catch
        {:parse_error, _, _} -> state
      end
    end
  end

  def optional(state, fun) do
    try do
      fun.(state)
    catch
      {:parse_error, _, _} -> state
    end
  end

  @doc """
  Eats a token.

  * `state` - assumed to be `{doc, str, pos}` (given by `run_tokenizer/2`).
  * `expr` - regexp expression.
  * `token_name` (atom, optional) - token name.
  * `reducer` (function, optional) - a function.

  Returns `{ doc, str, pos }` too, where `doc` is transformed via `fun`.

      eat state, ~r/.../, :document
      eat state, ~r/.../, :document, &(&1 ++ [{&3, :document, &2}])

      # &1 == current state
      # &2 == match data
      # &3 == position
  """
  def eat(state, expr) do
    eat(state, expr, nil, fn doc, _, _ -> doc end)
  end

  def eat(state, expr, token_name) do
    eat(state, expr, token_name, &(&1 ++ [{&3, token_name, &2}]))
  end

  def eat({doc, str, pos}, expr, token_name, fun) do
    remainder = String.slice(str, pos..-1)
    try do
      [term] = Regex.run(expr, remainder)
      length = String.length(term)
      { fun.(doc, term, pos), str, pos + length }
    rescue
      MatchError -> throw {:parse_error, pos, [token_name]}
    end
  end

  defmacro __using__(_ \\ []) do
    quote do
      import Exslim.TokenizerTools
    end
  end
end
