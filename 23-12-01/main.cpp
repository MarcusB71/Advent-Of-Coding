#include <sstream>
#include <string>
#include <fstream>
#include <iostream>
#include <regex>
void calcCalibrationVals(std::string line, int& res) {
    size_t startIdx = line.find_first_of("0123456789");
    size_t endIdx = line.find_last_of("0123456789");
    std::string fullNumString = std::string(1, line[startIdx]) + line[endIdx];
    int fullNum = stoi(fullNumString);
    res += fullNum;
    std::cout << "FUll NUM : " << fullNum << std::endl;
}

std::string replaceString(std::string& str, const std::string& toReplace, const std::string& replace) {
    size_t pos{};
    while ((pos = str.find(toReplace, pos)) != std::string::npos) {
        str.replace(pos, toReplace.length(), replace);
        pos += replace.length();
    }
    return str;
}

int main(int argc, char** argv) {
    std::ifstream file(argv[1]);
    if (!file) {
        throw "no file yo!";
    }
    int res{};
    std::ofstream output(argv[2]);
    if (!output)
    {
        throw "error no output file";
    }
    int i = 0;
    while (file) {
        i++;
        std::string line{};
        std::getline(file, line);
        if (file) {
            replaceString(line, "one", "1");
            replaceString(line, "two", "2");
            replaceString(line, "three", "3");
            replaceString(line, "four", "4");
            replaceString(line, "five", "5");
            replaceString(line, "six", "6");
            replaceString(line, "seven", "7");
            replaceString(line, "eight", "8");
            replaceString(line, "nine", "9");
            output << "line: " << i << " Value: " << line << std::endl;
            // std::cout << i << line << std::endl;
            std::cout << i << ": ";
            calcCalibrationVals(line, res);
        }
    }
    std::cout << " RES: " << res << std::endl;
    return res;
}