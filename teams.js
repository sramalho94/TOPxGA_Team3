// our function will take two arrays of strings, ios and android.
// android will have all the team members who work on windows, ios will be mac user
// it will randomly create team pairs using the team members in ios and android
// first we will try to ensure every android user is matched with an ios user
// if there arent enough ios users, then make teams with the remaining android users
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var android = ['Ben', 'Anchi', 'Alex'];
var ios = ['Jeremy', 'Avi', 'Sarven', 'Kayisha', 'Anna'];
var pairTeams = function (ios, android) {
    // lets make a copy of ios to randomize
    var _a;
    var iosCopy = __spreadArray([], ios, true);
    var j = 0;
    for (var i = iosCopy.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        _a = [iosCopy[j], iosCopy[i]], iosCopy[i] = _a[0], iosCopy[j] = _a[1];
    }
    var pairs = [];
    for (var _i = 0, android_1 = android; _i < android_1.length; _i++) {
        var androidDev = android_1[_i];
        if (iosCopy.length === 0) {
            break;
        }
        var iosDev = iosCopy.pop();
        pairs.push([androidDev, iosDev]);
    }
    for (var i = 0; i < iosCopy.length; i += 2) {
        if (iosCopy[i + 1]) {
            pairs.push([iosCopy[i], iosCopy[i + 1]]);
        }
    }
    return pairs;
};
console.log(pairTeams(ios, android));
