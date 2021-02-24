// toolsv2:
// a single entry point for now
// from_samples(stem, options)
// looks for ../samples/<stem>.{html,js,css}
// and shows them in tabs, output on the right hand side

function hash(word) {
    let crypto = require('crypto');
    let sha1 = crypto.createHash('sha1');
    sha1.update(word);
    return sha1.digest('hex');
}

function from_samples(stem, options) {
  options = options || {}
  let width = options.width || "35em"
  let height = options.height || "350px"
  let min_width = options.min_width || width
  let min_height = options.min_height || height
  let separate_show = options.separate_show || false
  let separate_width = options.separate_width || "400px"
  let separate_height = options.separate_height || "400px"
  let update_label = options.update_label || "Update →"
  let separate_label = options.separate_label || "Open in new window"
  // you may also define options.start_with to be either html or css or js
  let start_with = options.start_with || "html"
  // fallback if not in allowed range
  if (['html', 'css', 'js'].indexOf(start_with) < 0) start_with = "html"

  const fs = require('fs');


	let id = 'x' + hash(stem);

	let fullname_html = `../samples/${stem}.html`
	let fullname_css  = `../samples/${stem}.css`
	let fullname_js   = `../samples/${stem}.js`

	let textarea = '';

	try {
		fs.accessSync(fullname_html);
		textarea += `<textarea id="html_${id}">${fs.readFileSync(fullname_html)}</textarea>`;
	} catch {
		textarea += `<textarea id="html_${id}"><!-- empty --></textarea>`;
	}

	try {
		fs.accessSync(fullname_css);
		textarea += `<textarea id="css_${id}">${fs.readFileSync(fullname_css)}</textarea>`;
	} catch {
		textarea += `<textarea id="css_${id}">/* empty */</textarea>`;
	}


	try {
		fs.accessSync(fullname_js);
		textarea += `<textarea id="js_${id}">${fs.readFileSync(fullname_js)}</textarea>`;
	} catch {
		textarea += `<textarea id="js_${id}">// empty</textarea>`;
	}


	let html = `<style>
		span.${id}_btn {
			font-family: Courier;
			border: 0px;
			padding: 6px 12px;
		}
		span.${id}_selected {
			background-color: #ccf;
		}
		button.${id}_btn {
			border: 1px solid #88f;
			border-radius: 5px;
			background-color: #eef;
			margin-right: 10px;
			margin-bottom: 4px;
			padding: 6px 20px;
		}
	</style><div style="display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr;">
	<div style="display: flex; margin-top: 8px; border-bottom: 3px solid #88f" id="btns_left_${id}"></div>
	<div style="display: flex; justify-content: flex-end;" id="btns_right_${id}"></div>
	<div id="area_ctn_${id}" style="overflow: auto; resize: both; z-index: 100; min-width: ${min_width}; min-height: ${min_height}; height:${height}; width: ${width}; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr;" >
	${textarea}
	</div>
	<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr;" id="out_${id}"></div>
	<script defer>

	require(['codemirror/lib/codemirror',
	 	 'codemirror/mode/htmlmixed/htmlmixed',
		 'codemirror/mode/css/css',
		 'codemirror/mode/javascript/javascript'
		 ], (CodeMirror) => {

	let all_src = { };

	let dst = document.getElementById("out_${id}");

	let get_example_content = () => {
		let html = '';
		let css = '';
		let js = '';

		if (all_src.hasOwnProperty('html')) {
			html = all_src.html.getValue();
		}

		if (all_src.hasOwnProperty('css')) {
			css = all_src.css.getValue();
		}

		if (all_src.hasOwnProperty('js')) {
			js = all_src.js.getValue();
		}


		let tpl = "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;style&gt;__css__&lt;/style&gt;&lt;script defer&gt;__js__&lt;/script&gt;&lt;/head&gt;&lt;body&gt;__html__&lt;/body&gt;&lt;/html&gt;";
		// escape trick
		let escape_trick = document.createElement("textarea");
		escape_trick.innerHTML = tpl;
		tpl = escape_trick.textContent;

		tpl = tpl.replace("__html__", html);
		tpl = tpl.replace("__css__", css);
		tpl = tpl.replace("__js__", js);

		return tpl;
	};

	let update_iframe = () => {

		let tpl = get_example_content();

		let iframe = document.createElement("iframe");
		while (dst.firstChild) {
			dst.removeChild(dst.lastChild);
		}

		dst.appendChild(iframe);
    iframe.width = "100%";
    iframe.height = "100%";

		if (iframe.contentWindow) {
			iframe = iframe.contentWindow;
		} else {
			if (iframe.contentDocument.document) {
				iframe = iframe.contentDocument.document;
			} else {
				iframe = iframe.contentDocument;
			}
		}

		iframe.document.open();
		iframe.document.write(tpl);
		iframe.document.close();

		setTimeout(update_codemirror, 1000);

		return false;

	};


	const html_src = document.getElementById("html_${id}");
	all_src.html = CodeMirror.fromTextArea(html_src, {
		lineNumbers: true,
		mode: "htmlmixed"
	});
	all_src.html.getWrapperElement().style['min-height'] = '${height}';
	all_src.html.getWrapperElement().style.display = ${start_with == 'html'}?"block":"none";

	const css_src = document.getElementById("css_${id}");
	all_src.css = CodeMirror.fromTextArea(css_src, {
		lineNumbers: true,
		mode: "css"
	});
	all_src.css.getWrapperElement().style['min-height'] = '${height}';
	all_src.css.getWrapperElement().style.display = ${start_with == 'css'}?"block":"none";
	const js_src = document.getElementById("js_${id}");
	all_src.js = CodeMirror.fromTextArea(js_src, {
		lineNumbers: true,
		mode: "javascript"
	});
	all_src.js.getWrapperElement().style['min-height'] = '${height}';
	all_src.js.getWrapperElement().style.display = ${start_with == 'js'}?"block":"none";

	const area_ctn = document.getElementById("area_ctn_${id}");
	/* Trick to update the codemirror layout when resized */
	function update_codemirror() {
		all_src.html.refresh();
		all_src.css.refresh();
		all_src.js.refresh();
	}
	area_ctn.addEventListener("mouseup", update_codemirror);


	let btns_left = document.getElementById("btns_left_${id}");

	let btn_html = document.createElement("span");
	btn_html.textContent = "HTML"
	btn_html.classList.add("${id}_btn");
	if (${start_with == 'html'}) btn_html.classList.add("${id}_selected");
	btns_left.appendChild(btn_html);
	let btn_css = document.createElement("span");
	btn_css.textContent = "CSS"
	btn_css.classList.add("${id}_btn");
	if (${start_with == 'css'}) btn_css.classList.add("${id}_selected");
	btns_left.appendChild(btn_css);
	let btn_js = document.createElement("span");
	btn_js.textContent = "JS"
	btn_js.classList.add("${id}_btn");
	if (${start_with == 'js'}) btn_js.classList.add("${id}_selected");
	btns_left.appendChild(btn_js);
	let btn_fill = document.createElement("span");
//	btn_fill.classList.add("${id}_btn");
	btn_fill.style['flex-grow'] = '1';
	btns_left.appendChild(btn_fill);

	btn_html.addEventListener("click", () => {
		btn_css.classList.remove("${id}_selected");
		btn_js.classList.remove("${id}_selected");
		btn_html.classList.add("${id}_selected");
		all_src.css.getWrapperElement().style.display = "none";
		all_src.js.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "block";
		all_src.html.refresh();
	});

	btn_css.addEventListener("click", () => {
		btn_html.classList.remove("${id}_selected");
		btn_js.classList.remove("${id}_selected");
		btn_css.classList.add("${id}_selected");
		all_src.js.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "none";
		all_src.css.getWrapperElement().style.display = "block";
		all_src.css.refresh();
	});

	btn_js.addEventListener("click", () => {
		btn_css.classList.remove("${id}_selected");
		btn_html.classList.remove("${id}_selected");
		btn_js.classList.add("${id}_selected");
		all_src.css.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "none";
		all_src.js.getWrapperElement().style.display = "block";
		all_src.js.refresh();
	});

	let btn_update = document.createElement("button");
	btn_update.textContent = "${update_label}";
	btn_update.classList.add("${id}_btn");
	btns_left.appendChild(btn_update);
	btn_update.addEventListener("click", update_iframe);

	let btns_right = document.getElementById("btns_right_${id}");

	if (${separate_show}) {
		let btn_window = document.createElement("button");
		btn_window.textContent = "${separate_label}";
		btn_window.classList.add("${id}_btn");
		btn_window.addEventListener("click", () => {
			let tpl = get_example_content();

			let w = window.open(null, '_blank', 'height=${separate_height},width=${separate_width}');
			w.document.open();
			w.document.write(tpl);
			w.document.close();

		});
		btns_right.appendChild(btn_window);
	}

	update_iframe();

	all_src.html.refresh();

	}); /* End of all requirements */

	`

	html += `</script>`;

	$$.html(html);
}


function show_sample(stem) {
	$$.html(`<div style="overflow: auto; resize: both; display: grid"><iframe src="/view/samples/${stem}.html"></iframe></div>`);
}

const inject_css = require('./inject-css')

function init() {
  let in_out_css = inject_css.read_style('../css/in-out.css')
  $$.html(in_out_css + `<script>
require(['codemirror/mode/htmlmixed/htmlmixed']);
Jupyter.notebook.execute_cells_below();
</script>`);
}

exports.init = init;
exports.from_samples = from_samples;
exports.show_sample = show_sample;
