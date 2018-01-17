import React from 'react'
import JSZip from 'jszip'
import fileSaver, { saveAs } from 'file-saver'
import $ from "jquery"

var zip = new JSZip();

function generateHTMLFile(){
    var promise = $.get("LayoutParts/navbar.html");
    console.log(promise)
    zip.file("freaking-website/index.html", promise);
}

function generateCSSFile(){
    zip.file("freaking-website/style.css", "Hello World\n");
}

function generateResultZIPFile(){
    zip.generateAsync({type:"blob"})
    .then(function (blob) {
        saveAs(blob, "hello.zip");
    });
}

function generateWebsite(){
    generateHTMLFile();
    generateCSSFile();
    generateResultZIPFile();
}

const Generator = (props) => {
    return (
        <button onClick={ generateWebsite } id="generateWebsiteButton" ref={el => this.el = el}>Wygeneruj stronę</button>
    );
    
}

export default Generator;