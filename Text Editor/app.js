// bold 

var isBold = false;

function bold() {
    if (isBold) {
        document.getElementById("bold-btn").style.fontWeight = 'normal';
        document.getElementById("text").style.fontWeight = 'normal';
        isBold = false;
    } else {
        document.getElementById("bold-btn").style.fontWeight = 'bold';
        document.getElementById("text").style.fontWeight = 'bold';
        isBold = true;
    }
    
}

// italic 

var isItalic = false;

function italic() {
    if (isItalic) {
        document.getElementById("italic-btn").style.fontStyle = 'normal';
        document.getElementById("text").style.fontStyle = 'normal';
        isItalic = false;
    } else {
        document.getElementById("italic-btn").style.fontStyle = 'italic';
        document.getElementById("text").style.fontStyle = 'italic';
        isItalic = true;
    }
    
}

// underline 

var isUnderLine = false;

function underLine() {
    if (isUnderLine) {
        document.getElementById("underLine-btn").style.textDecoration = 'none';
        document.getElementById("text").style.textDecoration = 'none';
        isUnderLine = false;
    } else {
        document.getElementById("underLine-btn").style.textDecoration = 'underline';
        document.getElementById("text").style.textDecoration = 'underline';
        isUnderLine = true;
    }
    
}

// text size 

var textSize = document.getElementById('textSize')

textSize.addEventListener('input', function () {
    document.getElementById('text').style.fontSize = `${textSize.value}px`;
})

// lowercase 

var isLowerCase = false;

function lowerCase() {
    if (isLowerCase) {
        document.getElementById("text").style.textTransform = 'lowerCase';
        isLowerCase = false;
    } else {
        document.getElementById("text").style.textTransform = 'lowerCase';
        isLowerCase = true;
    }
    
}

// uppercase 

var isUpperCase = false;

function upperCase() {
    if (isUpperCase) {
        document.getElementById("text").style.textTransform = 'lowerCase';
        isUpperCase = false;
    } else {
        document.getElementById("text").style.textTransform = 'upperCase';
        isUpperCase = true;
    }
    
}

// capitalize 

var isCapitalize = false;

function capitalize() {
    if (isCapitalize) {
        document.getElementById("text").style.textTransform = 'lowerCase';
        isCapitalize = false;
    } else {
        document.getElementById("text").style.textTransform = 'capitalize';
        isCapitalize = true;
    }
    
}

// background color

var bgColor = document.getElementById('background')

bgColor.addEventListener("input", function(){
    document.getElementById('text').style.backgroundColor = bgColor.value;
})

// text color 

var textColor = document.getElementById('textColor');

textColor.addEventListener('input', function () {
    document.getElementById('text').style.color = textColor.value;
})

// text left

function textLeft() {
    document.getElementById('text').style.textAlign = 'left';
}

// text center

function textCenter() {
    document.getElementById('text').style.textAlign = 'center';
}

// text left

function textRight() {
    document.getElementById('text').style.textAlign = 'right';
}

// text left

function textJustify() {
    document.getElementById('text').style.textAlign = 'justify';
}

// reset 

function reset() {
    // document.getElementById('text').style.all = 'revert';
    location.reload()
}