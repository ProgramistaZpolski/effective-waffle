"use strict";
// Create a class for the element
class Input extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		const wrapper = document.createElement("div");

		const style = document.createElement('style');

		style.textContent = `input, textarea {
			border: 1px solid #828282;
			border-radius: 8px;
			padding: 1rem;
			font-weight: 500;
			display: block;
		}

		input:hover, textarea:hover {
			border: 1px solid #333333;
		}
		
		input:focus, textarea:focus {
			border: 1px solid #2962FF;
		}
		
		[data-error], [data-error]:focus {
			border: 1px solid #D32F2F;
		}
		
		:disabled {
			background: #F2F2F2;
			border: 1px solid #E0E0E0;
		}
		
		p {
			font-size: .8rem;
			line-height: 1;
		}
		
		[data-fullwidth] {
			width: 100%;
		}`;

		shadow.appendChild(wrapper);

		const label = document.createElement("label");
		label.innerText = this.getAttribute("data-label") ?? "Label";

		const input = document.createElement(this.hasAttribute("data-multiline") ? "textarea": "input");
		input.placeholder = this.getAttribute("data-placeholder") ?? "Placeholder";
		this.hasAttribute("data-error") ? input.setAttribute("data-error", "true") : void(0);
		this.hasAttribute("data-fullwidth") ? input.setAttribute("data-fullwidth", "true") : void(0);
		this.hasAttribute("data-disabled") ? input.setAttribute("disabled", "true") : void(0);
		wrapper.appendChild(label);
		wrapper.appendChild(input);
		this.hasAttribute("data-helpertext") ? input.outerHTML += `<p>${this.getAttribute("data-helpertext")}</p>` : void(0);
		this.hasAttribute("data-value") ? input.value = this.getAttribute("data-value") : void(0);
		this.dataset.size == "sm" ? input.style.padding = ".65rem" : void(0);
		this.dataset.size == "md" ? input.style.padding = "1.4rem" : void(0);
		this.dataset.row ? input.rows = this.dataset.row : void(0);
		this.hasAttribute("data-starticon") ? style.textContent += `input { background: no-repeat left center url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-telephone-fill' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/%3E%3C/svg%3E"); }` : void(0);
		this.hasAttribute("data-endicon") ? style.textContent += `input { background: no-repeat right center url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-lock-fill' viewBox='0 0 16 16'%3E%3Cpath d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/%3E%3C/svg%3E"); }` : void(0);

		shadow.appendChild(style);
	};
};

// Define the new element
customElements.define('my-input', Input);