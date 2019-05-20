
/**The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
*/

class Solution {
public:
    string convert(string s, int numRows) {
        
        if (numRows <= 1) { return s; }
        
        int aRowLen[numRows];
        char aRowChar[numRows][s.size() / (numRows - 1) + 2];
        
        memset(aRowLen, 0, sizeof(aRowLen));
        memset(aRowChar, 0, sizeof(aRowChar));
        
        int aRow = 0;
        int aCol = 0;
        
        int i = 0;
        bool aVertical = true;
        while (i < s.size()) {
            
            if (aVertical) {
                
                aRowChar[aRow][aRowLen[aRow]++] = s[i];
                
                aRow++;
                if (aRow > (numRows - 1)) {
                    aRow = (numRows - 1);
                    aVertical = false;
                }
            } else {
                
                aRow -= 1;
                aRowChar[aRow][aRowLen[aRow]++] = s[i];
                
                if (aRow <= 0) {
                    aRow = 1;
                    aVertical = true;
                }
            }
            ++i;
        }
        
        string aResult;
        for (int aRow=0;aRow<numRows;aRow++) {
            aResult += string(aRowChar[aRow]);
        }
        
        return aResult;
    }
};
