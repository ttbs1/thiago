(function() {
	var id_ = 'columns-full';
	var cols_ = document.querySelectorAll('#' + id_ + ' .column');
	var dragSrcEl_ = null;
        var aux1, aux2;

	this.handleDragStart = function(e) {
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', this.innerHTML);

		dragSrcEl_ = this;

		// this/e.target is the source node.
		this.classList.add('moving');
	};

	this.handleDragOver = function(e) {
		if (e.preventDefault) {
			e.preventDefault(); // Allows us to drop.
		}
                
                var count = this.querySelector('.count');
                aux1 = parseInt(count.getAttribute('data-col-moves'));
                var newCount = aux2;
                count.setAttribute('data-col-moves', aux2);
                count.textContent = 'moves: ' + aux2;
                
		e.dataTransfer.dropEffect = 'move';

		return false;
	};

	this.handleDragEnter = function(e) {
                var count = this.querySelector('.count');
                aux2 = parseInt(count.getAttribute('data-col-moves'));
		this.classList.add('over');
	};

	this.handleDragLeave = function(e) {
		// this/e.target is previous target element.
		this.classList.remove('over');
	};

	this.handleDrop = function(e) {
		// this/e.target is current target element.

		if (e.stopPropagation) {
			e.stopPropagation(); // stops the browser from redirecting.
		}

		// Don't do anything if we're dropping on the same column we're dragging.
		if (dragSrcEl_ != this) {
			dragSrcEl_.innerHTML = this.innerHTML;
			this.innerHTML = e.dataTransfer.getData('text/html');

			// Set number of times the column has been moved.
			var count = this.querySelector('.count');
                        //aux2 = parseInt(count.getAttribute('data-col-moves'));
			count.setAttribute('data-col-moves', aux1);
			count.textContent = 'moves: ' + aux1;
		}

		return false;
	};

	this.handleDragEnd = function(e) {
		// this/e.target is the source node.
		[].forEach.call(cols_, function(col) {
			col.classList.remove('over');
			col.classList.remove('moving');
		});
	};

	[].forEach.call(cols_, function(col) {
		col.setAttribute('draggable', 'true'); // Enable columns to be draggable.
		col.addEventListener('dragstart', this.handleDragStart, false);
		col.addEventListener('dragenter', this.handleDragEnter, false);
		col.addEventListener('dragover', this.handleDragOver, false);
		col.addEventListener('dragleave', this.handleDragLeave, false);
		col.addEventListener('drop', this.handleDrop, false);
		col.addEventListener('dragend', this.handleDragEnd, false);
	});
})();