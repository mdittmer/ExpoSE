//Test whether the unicode property has worked

var x = symbolic X initial '';

if (/^\u{64}$/u.test(x)) {
	if (x != '\u0064') throw 'Unreachable';
	throw 'Reachable';
}