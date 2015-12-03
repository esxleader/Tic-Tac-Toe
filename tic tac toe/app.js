var a = [];
for (i = 1; i < 4; i++) {
   a[i] = [];
   for (j = 1; j < 4; j++) {
      a[i][j] = "[" + i + ", " + j + "]";
   }
}
a[1][1] = 0;
a[1][2] = 0;
a[1][3] = 0;
a[2][1] = 0;
a[2][2] = 0;
a[2][3] = 0;
a[3][1] = 0;
a[3][2] = 0;
a[3][3] = 0;
var state = 0;
var press = 0;
var player = 1;
show_playing.innerHTML = 'This turn: <br> O';

function show_now () {
	var o = '<img src="image/o.png">';
	var x = '<img src="image/x.png">';
	if (player == 1) {
		return o;
	}
	if (player == 2) {
		return x;
	}
}


function playing() {
	if (state == 0) {
		if (player == 1) {
		player = 2
		show_playing.innerHTML = 'This turn: <br> X';
		}
		else {
			player = 1;
			show_playing.innerHTML = 'This turn: <br> O';
			}
	}
}

function a11() {
	if (a[1][1] == 0) {
		a[1][1] = player;
		document.getElementById('a11').innerHTML = show_now();
		press++;
		check();
	}
}
function a12() {
	if (a[1][2] == 0) {
		a[1][2] = player;
		document.getElementById('a12').innerHTML = show_now();
		press++;
		check();
	}
}
function a13() {
	if (a[1][3] == 0) {
		a[1][3] = player;
		document.getElementById('a13').innerHTML = show_now();
		press++;
		check();
	}
}
function a21() {
	if (a[2][1] == 0) {
		a[2][1] = player;
		document.getElementById('a21').innerHTML = show_now();
		press++;
		check();
	}
}
function a22() {
	if (a[2][2] == 0) {
		a[2][2] = player;
		document.getElementById('a22').innerHTML = show_now();
		press++;
		check();
	}
}
function a23() {
	if (a[2][3] == 0) {
		a[2][3] = player;
		document.getElementById('a23').innerHTML = show_now();
		press++;
		check();
	}
}
function a31() {
	if (a[3][1] == 0) {
		a[3][1] = player;
		document.getElementById('a31').innerHTML = show_now();
		press++;
		check()
	}
}
function a32() {
	if (a[3][2] == 0) {
		a[3][2] = player;
		document.getElementById('a32').innerHTML = show_now();
		press++;
		check();
	}
}
function a33() {
	if (a[3][3] == 0) {
		a[3][3] = player;
		document.getElementById('a33').innerHTML = show_now();
		press++;
		check();
	}
}

function check() {
	for (p=1;p<3;p++) {
	if (a[1][1]==p && a[1][2]==p && a[1][3]==p) {
		if (a[1][1] != 0) {
			win(1);
			break;
		}
	}
	if (a[2][1]==p && a[2][2]==p && a[2][3]==p) {
		if (a[2][1] != 0) {
			win(2);
			break;
		}
	}
	if (a[3][1]==p && a[3][2]==p && a[3][3]==p) {
		if (a[3][1] != 0) {
			win(3);
			break;
		}
	}
	if (a[1][1]==p && a[2][1]==p && a[3][1]==p) {
		if (a[1][1] != 0) {
			win(4);
			break;
		}
	}
	if (a[1][2]==p && a[2][2]==p && a[3][2]==p) {
		if (a[1][2] != 0) {
			win(5);
			break;
		}
	}
	if (a[1][3]==p && a[2][3]==p && a[3][3]==p) {
		if (a[1][3] != 0) {
			win(6);
			break;
		}
	}
	if (a[1][1]==p && a[2][2]==p && a[3][3]==p) {
		if (a[1][1] != 0) {
			win(7);
			break;
		}
	}
	if (a[1][3]==p && a[2][2]==p && a[3][1]==p) {
		if (a[1][3] != 0) {
			win(8);
			break;
		}
	}
	if (press == 9) {
		state = 2;
		alert("Tie!");
		document.getElementById('win_pic').style.visibility='visible';
		break;
	}
	}
	playing();
}

function win(win_type) {
	state = 1;
	var pic_out = "image/" + win_type + ".png";
	document.getElementById('win_pic').src=pic_out;
	document.getElementById('win_pic').style.visibility='visible';
	if (player == 1) {
		alert("O win!");
	}
	if (player == 2) {
		alert("X win!");
	}
}

function restart() {
	location.reload();
}