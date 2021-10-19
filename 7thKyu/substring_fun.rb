# Complete the function that takes an array of words.

# You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

# For example:

# ["yoda", "best", "has"]  -->  "yes"
#   ^        ^        ^
#   n=0     n=1     n=2
# Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

def nth_char(words)
  final_word = []
      words.each_with_index { |word, index| 
        final_word << word[index]
      }
  return final_word.join('')
end