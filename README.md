# Contract Registry

This smart contract stores the CID of files uploaded to IPFS.

## Usage
### Write
The smart contract allows you to upload a CID with the `register` function.

```
//A write-only function that allows anyone to add a registry
    function register(string memory _cid) public {
        address _owner = msg.sender;
        Entry memory entry;
        entry.owner = _owner;
        entry.timestamp = block.timestamp;
        entries[_cid] = entry;
        cids.push(_cid);
        emit LogEntry(_cid, _owner, entry.timestamp);
    }
```

Using `ethers`

```
const provider = new ether.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${infuraId}`);
    const wallet = new ether.Wallet(key, provider);
    const contract = new ether.Contract(address, abi, wallet);

    await contract.register(cid)
    .then(function(txHash: string){
        console.log("Transaction hash:", txHash);
    })
    .catch(function(error: any){
        console.log("Error:", error);
    });
```

### Read

`getOwner`
```
//A read-only function that allows anyone to check the address that stored a CID
    function getOwner(string memory _cid) public view returns (address) {
        return entries[_cid].owner;
    }
```

Contract Interaction using `web3`

```
const Web3 = require('web3');
const abi = require('../../abi/abi.json').abi;
const address = "0x1dC2305F2C96172027c1A4E56df1FfB1D2B225b2"
const web3 = new Web3(new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${infuraId}`));

//get the address that uploaded a cid
async function getCidOwner(cid: string){
    await registryContract.methods.getOwner(cid).call()
    .then(function(address: string){
        console.log("This cid was uploaded by:", address);
    })
    .catch(function(error: any){
        console.log("Error:", error);
    })
}
```

`getCids`

```
//A read-only function that allows anyone to check all the uploaded CIDs
    function getCids() public view returns (string[] memory) {
        return cids;
    }
```

Contract Interaction using `web3`

```
async function getAllCids(){
    await registryContract.methods.getCids().call()
    .then(function(cid: string){
        console.log("CID:", cid);
    })
    .catch(function(error: any){
        console.log("Error:", error);
    })
}
```

`getCidTimestamp`

```
async function getCidTime(cid: string){
    await registryContract.methods.getTimestamp(cid).call()
    .then(function(time: number){
        console.log("This cid was uploaded at:", time);
    })
    .catch(function(error: any){
        console.log("Error:", error);
    })
}
```

`getCidInfo`

```
async function getCidInformation(cid: string){
    await registryContract.methods.getCidInfo(cid).call()
    .then(function(info: any){
        console.log("This cid was uploaded at:", info);
    })
    .catch(function(error: any){
        console.log("Error:", error);
    })
}
```

`confirm`

```
//confirm if a cid has been uploaded
async function confirm(cid: string){
    await registryContract.methods.confirmRegistry(cid).call()
    .then(function(status: string){
        console.log(status);
    })
    .catch(function(error: any){
        console.log("Error:", error);
    })
}
```

## Deployment
This contract is currently deployed on the rinkeby testnet at the address `0x1dC2305F2C96172027c1A4E56df1FfB1D2B225b2`

