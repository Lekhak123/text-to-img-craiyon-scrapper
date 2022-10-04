var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var puppeteer = require('puppeteer-core');
var find = require("./return_interval");
module.exports = function (find_image) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, buttonClick, textContent, base64Data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({
                        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                        headless: true,
                        slowMo: 150
                    })["catch"](function (e) {
                        console.log("browser launch error " + e);
                    })];
                case 1:
                    browser = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 19, , 20]);
                    return [4 /*yield*/, browser.newPage()];
                case 3:
                    page = _a.sent();
                    return [4 /*yield*/, page.setDefaultNavigationTimeout(0)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, page.setViewport({ width: 1600, height: 900 })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.goto("https://www.craiyon.com/", { waitUntil: 'networkidle0' })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.waitForSelector('#prompt')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.$("#prompt")];
                case 8:
                    buttonClick = _a.sent();
                    return [4 /*yield*/, buttonClick.click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, page.focus("#prompt")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, page.keyboard.type(find_image)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(find(1000, 2000))];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, page.keyboard.press('Enter')];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, page.waitForTimeout(find(1000, 3000))];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, page.waitForSelector('#app > div > div > div.aspect-w-1.aspect-h-1 > div > div > div > div.grid.grid-cols-3.gap-2', { timeout: 180000 })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, page.waitForSelector('#app > div > div > div.aspect-w-1.aspect-h-1 > div > div > div > div.grid.grid-cols-3.gap-2')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            var return_image = document.querySelector("#app > div > div > div.aspect-w-1.aspect-h-1 > div > div > div > div.grid.grid-cols-3.gap-2 > div:nth-child(1) > img").getAttribute("src");
                            return return_image;
                        })];
                case 17:
                    textContent = _a.sent();
                    base64Data = textContent.replace(/^data:image\/jpeg;base64,/, "");
                    /*
                         require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
                           console.log(err);
                         });
                    */
                    return [4 /*yield*/, browser.close()];
                case 18:
                    /*
                         require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
                           console.log(err);
                         });
                    */
                    _a.sent();
                    return [2 /*return*/, base64Data];
                case 19:
                    e_1 = _a.sent();
                    return [2 /*return*/, ("Something went wrong. Make sure you have chrome browser installed.\n      The error code is -> \n      " + e_1)];
                case 20: return [2 /*return*/];
            }
        });
    });
};
