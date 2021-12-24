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