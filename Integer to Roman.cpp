*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000



class Solution {
public:
    string intToRoman(int num) {
        string ret = "";
        if (num <= 0) return ret;
        { {1, 2, 3, 4, 5, 6, 7, 8, 9},
         {10, 20, 30, 40, 50, 60, 70, 80, 90},
         {100, 200, 300, 400, 500, 600, 700, 800, 900},
         {1000, 2000, 3000} }
        string roman[4][10] = {{"0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"},
                               {"0", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"},
                               {"0", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"},
                               {"0", "M", "MM", "MMM"}};
        int i = 0, k = 1000;
        
        for (i = 3; i >= 0; --i)
        {
            if (num / k != 0)
                ret += roman[i][num/k];
            num %= k;
            k /= 10;
        }
        
        return ret;
    }
};