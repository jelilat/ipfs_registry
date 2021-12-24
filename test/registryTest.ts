const { expect } = require("chai");
const chais = require("chai");
chai.use(require('chai-bignumber')());

describe("Registry contract", function () {

  let ipfsRegistry: any;
  let cid: string = "QmacN3qTuyHyRhqKDPSjJa2EvFYKyqemrEYN32Rqwwp4Yt";
  let cids: string[];

  before(async function(){
    const Registry = await ethers.getContractFactory("Registry"); 
    ipfsRegistry = await Registry.deploy();
  })

  describe("Deployment", function () {
    it("There should be no CID stored in the contract on deployment", async function () {
    
        cids = await ipfsRegistry.getCids();
        
        expect(cids).to.be.empty;
      });
  });
    
  describe("Registering CID", function () {
    it("Should register a CID", async function () {
    
        const tx = await ipfsRegistry.register(cid);
        
        expect(tx.hash).to.be.a("string");
      });

  });

  describe("Getting CID information", function () {
    it("Should get CID information", async function () {
    
        await ipfsRegistry.register(cid);
        const info = await ipfsRegistry.getCidInfo(cid);
        console.log(info[1])
        
        expect(info[0]).to.be.a("string");
        expect(info[1]).to.be.bignumber;
      });
  });

    describe("Getting CID owner", function () {
    it("Should get CID owner", async function () {
    
        await ipfsRegistry.register(cid);
        const owner = await ipfsRegistry.getOwner(cid);
        
        expect(owner).to.be.a("string");
      });
  });

    describe("Getting CID time", function () {
    it("Should get CID time", async function () {
    
        await ipfsRegistry.register(cid);
        const time = await ipfsRegistry.getTimestamp(cid);
        
        expect(time).to.be.bignumber;
      });
  });

    describe("Confirming CID", function () {
    it("Should confirm CID", async function () {
    
        await ipfsRegistry.register(cid);
        const status = await ipfsRegistry.confirmRegistry(cid);
        
        expect(status).to.be.a("string");
      });
  });

    describe("Getting all CIDs", function () {
    it("Should get all CIDs", async function () {
    
        await ipfsRegistry.register(cid);
        cids = await ipfsRegistry.getCids();
        
        expect(cids).to.be.a("array");
      });
  });
  
});

