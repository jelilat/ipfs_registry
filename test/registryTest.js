"use strict";
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
var expect = require("chai").expect;
var chai = require("chai");
chai.use(require('chai-bignumber')());
describe("Registry contract", function () {
    var ipfsRegistry;
    var cid = "QmacN3qTuyHyRhqKDPSjJa2EvFYKyqemrEYN32Rqwwp4Yt";
    var cids;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            var Registry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ethers.getContractFactory("Registry")];
                    case 1:
                        Registry = _a.sent();
                        return [4 /*yield*/, Registry.deploy()];
                    case 2:
                        ipfsRegistry = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    describe("Deployment", function () {
        it("There should be no CID stored in the contract on deployment", function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.getCids()];
                        case 1:
                            cids = _a.sent();
                            expect(cids).to.be.empty;
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe("Registering CID", function () {
        it("Should register a CID", function () {
            return __awaiter(this, void 0, void 0, function () {
                var tx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.register(cid)];
                        case 1:
                            tx = _a.sent();
                            expect(tx.hash).to.be.a("string");
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe("Getting CID information", function () {
        it("Should get CID information", function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.register(cid)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ipfsRegistry.getCidInfo(cid)];
                        case 2:
                            info = _a.sent();
                            console.log(info[1]);
                            expect(info[0]).to.be.a("string");
                            expect(info[1]).to.be.bignumber;
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe("Getting CID owner", function () {
        it("Should get CID owner", function () {
            return __awaiter(this, void 0, void 0, function () {
                var owner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.register(cid)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ipfsRegistry.getOwner(cid)];
                        case 2:
                            owner = _a.sent();
                            expect(owner).to.be.a("string");
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe("Getting CID time", function () {
        it("Should get CID time", function () {
            return __awaiter(this, void 0, void 0, function () {
                var time;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.register(cid)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ipfsRegistry.getTimestamp(cid)];
                        case 2:
                            time = _a.sent();
                            expect(time).to.be.bignumber;
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe("Confirming CID", function () {
        it("Should confirm CID", function () {
            return __awaiter(this, void 0, void 0, function () {
                var status;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.register(cid)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ipfsRegistry.confirmRegistry(cid)];
                        case 2:
                            status = _a.sent();
                            expect(status).to.be.a("string");
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe("Getting all CIDs", function () {
        it("Should get all CIDs", function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ipfsRegistry.register(cid)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, ipfsRegistry.getCids()];
                        case 2:
                            cids = _a.sent();
                            expect(cids).to.be.a("array");
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
