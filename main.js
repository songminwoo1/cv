window.onload = () => {
    Init();
    console.log(mWins);
};

var mWins = [];
var mWinMov = [];

const Init = () =>
{
    mWins.push(document.getElementById("embed-skills"));
    mWins.push(document.getElementById("profile-3d"));
    mWins.push(document.getElementById("profile-third"));

    for(const entry of mWins) {
        mWinMov.push(changeWindowFunc(entry));
    }
};

const changeWindowFunc = (targ) => () => {
    for(const entry of mWins) {
        entry.style.display = "none";
    }
    targ.style.display = "block";
};

var state = {mWinN:0};
const mWinForw = () => {
    if(state.mWinN >= mWins.length - 1) {
        state.mWinN = 0;
    } else {
        state.mWinN += 1;
    }
    mWinMov[state.mWinN]();
};
const mWinBack = () => {
    if(state.mWinN == 0) {
        state.mWinN = mWins.length - 1;
    } else {
        state.mWinN -= 1;
    }
    mWinMov[state.mWinN]();
};

function closeButtonEvent() {
    mWinForw();
};