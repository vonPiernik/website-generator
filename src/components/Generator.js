import React, { Component } from 'react'
import JSZip from 'jszip'
import fileSaver, { saveAs } from 'file-saver'
import $ from "jquery"
import { connect } from 'react-redux'

var zip = new JSZip();



class Generator extends Component {
    generateHTMLFile(){
        // var generatedWebsiteContent = null
        // $.get("LayoutParts/html-start.html", function(data, status){ generatedWebsiteContent += data })
    
        // this.props.elements.map((element, index) => {
        //     console.log(element)
        //     if (element.name === 'navbar') {
        //         if (element.layout !== 'default') {
        //             $.get("LayoutParts/navbar-" + element.layout + ".html", function(data, status){ generatedWebsiteContent += data })
        //         } else {
        //             $.get("LayoutParts/navbar.html", function(data, status){ generatedWebsiteContent += data })               
        //         }
        //     }
        //     else if (element.name === 'footer') {
        //         if (element.layout !== 'default') {
        //              $.get("LayoutParts/footer-" + element.layout + ".html", function(data, status){ generatedWebsiteContent += data })
        //         } else {
        //             $.get("LayoutParts/footer.html", function(data, status){ generatedWebsiteContent += data })               
        //         }
        //     }
        //     else {
        //         if (element.layout !== 'default') {
        //             $.get("LayoutParts/section-" + element.layout + ".html", function(data, status){ generatedWebsiteContent += data })
        //         } else {
        //             $.get("LayoutParts/section.html", function(data, status){ generatedWebsiteContent += data })               
        //         }
        //     }
        // })
    
        // $.get("LayoutParts/html-end.html", function(data, status){ 
        //     generatedWebsiteContent += data 
        // })
        var elementsToGenerate = [];
        var generatedWebsiteContent;

        // get beginning of the html document with <head> etc.
        $.get("LayoutParts/html-start.html", function(data, status){ generatedWebsiteContent += data })

        // for each element from builder get html file
        this.props.elements
        .map((element, index) => {
            elementsToGenerate.push( element.name + "-" + element.layout )
            var url = 'LayoutParts/' + element.name + "-" + element.layout + '.html'
            console.log(element.name)
            $.get(url, function(data,status){
                generatedWebsiteContent += data
                console.log(elementsToGenerate)
            })
            
        })
        $.get("LayoutParts/html-end.html", function(data, status){ generatedWebsiteContent += data }).then(function (content) {
            zip.file("your-new-website/index.html", generatedWebsiteContent);
            zip.generateAsync({type:"blob"})
            .then(function (blob) {
                saveAs(blob, "your-new-website#" + Math.floor(Date.now() / 1000) + ".zip");
            });
        })

        
        //  $.get("http://localhost/generator/public/LayoutParts/generate-website.php", {"elementsToGenerate[]": elementsToGenerate}, function(data, status){
        //     console.log(data)
        // })
        // console.log(generatedWebsiteContent)
        // zip.file("freaking-website/index.html", );
    }
    
   
    
    generateWebsite(){
        this.generateHTMLFile();
        // this.generateCSSFile();
        // this.generateResultZIPFile();
    }

	render() {
		return (
            <button onClick={ this.generateWebsite.bind(this) } id="generateWebsiteButton" ref={el => this.el = el}>Wygeneruj stronę</button>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		elements: state.builder.elements
	}
}

export default connect(mapStateToProps,null)(Generator);