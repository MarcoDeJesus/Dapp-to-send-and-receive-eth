const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract('ApprovalContract', function(accounts){

    it('initiates contract', async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();

        assert.equal(approver, 0x1F18703B0ba7730BFD37fe96F5cC9bEcFa0096A8, "approvers don't match")
    });

    it('Takes a deposit', async function(){
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[2], {value: 1e+18, from: accounts[3]});

        assert.equal(web3.eth.getBalance(contract.address), 1e+18, "Amount is not correct.");
    })
})