function StageControl(stages) {

    var currentStage = 0;

    function updateStage() {
        if (currentStage < 0) {
            currentStage += stages.length - 1;
        }
        currentStage = currentStage % stages.length;

        var func = stages[currentStage];
        func();
    }

    var next = this.next = function () {
        currentStage++;

        updateStage();
    };

    var prev = this.prev = function () {
        currentStage--;

        updateStage();
    };

    var controlRoot = document.createElement('div');
    controlRoot.className = 'stage-control-toolbar';
    var nextBtn = document.createElement('button');
    nextBtn.innerHTML = 'NEXT';
    var prevBtn = document.createElement('button');
    prevBtn.innerHTML = 'PREV';
    controlRoot.appendChild(prevBtn);
    controlRoot.appendChild(nextBtn);

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    document.body.appendChild(controlRoot);
}