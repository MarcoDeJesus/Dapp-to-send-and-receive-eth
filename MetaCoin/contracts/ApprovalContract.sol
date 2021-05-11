// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract ApprovalContract {

    address public sender;
    address public receiver;
    address public constant approver = 0x1F18703B0ba7730BFD37fe96F5cC9bEcFa0096A8;

    function deposit(address _receiver) external payable {
        require(msg.value > 0);
        sender = msg.sender;
        receiver = _receiver;
    }

    function viewApprover() external pure returns(address) {
        return(approver);
    }

    function approve() external {
        require(msg.sender == approver);
        payable(receiver).transfer(address(this).balance);
    }
}