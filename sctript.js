function Uploader() {
  var img = document.getElementById("imguploader").value;

  var f = new FormData();

  f.append("image", img.files[0]);

  var r = new XMLHttpRequest();

  r.onreadystatechange = function () {
    if (r.readyState == 4 && r.status == 200) {
      var t = r.responseText;
      alert(t);
    }
  }
  r.open("POST", "process.php", true);
  r.send(f);
}
