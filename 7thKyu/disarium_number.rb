=begin
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
=end

def disarium_number(n)
  new_arr = n.to_s.split('').each_with_index.map{ |x, i| (x.to_i)**(i+1) }
  final_num = new_arr.reduce(0){ |sum, num| sum + num }
  if final_num == n
    "Disarium !!"
  else
    "Not !!"
  end
end