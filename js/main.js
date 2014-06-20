function handleFiles(evt) {
	var files = evt.target.files,
		outpt = document.getElementById('outpt');


	if (!files) {
		alert('Failed to load files');
		return;
	}

	for (var i=0, file; file=files[i]; i++) {
		var fr = new FileReader();

		fr.onload = (function(file) {
			return function(e) {
				if (file.size > 1048576) return;
				var contents = e.target.result;
				outpt.textContent = btoa(contents);
			};
		})(file);

		fr.readAsBinaryString(file);
	}
}

document.getElementById('files').addEventListener('change', handleFiles, false);
