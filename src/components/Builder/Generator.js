import React, { Component } from 'react'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import $ from "jquery"
import { connect } from 'react-redux'

var zip = new JSZip();



class Generator extends Component {
    generateHTMLFile(){

        var elementsToGenerate = [];

        // for each element from builder get html file name and then send an array to php script
        this.props.elements
        .map((element, index) => {
            elementsToGenerate.push( element.name + "-" + element.layout )
            return true;
        })
        $.get("http://localhost/generator/public/LayoutParts/generate-website.php", {"elementsToGenerate[]": elementsToGenerate}).then(function (data) {
            zip.file("your-new-website/index.html", data);
            zip.generateAsync({type:"blob"})
            .then(function (blob) {
                saveAs(blob, "your-new-website#" + Math.floor(Date.now() / 1000) + ".zip");
            });
        })

        
    }
    
   
    
    generateWebsite(){
        this.generateHTMLFile();
    }

	render() {
		return (
            <div className="Generator">
                <h3>3. Wygeneruj gotową strone <strong>( i pobierz jako plik .zip )</strong></h3>
                <button 
                disabled={ !this.props.elements[0] }
                onClick={ this.generateWebsite.bind(this) } 
                id="generateWebsiteButton" ref={el => this.el = el}>Wygeneruj stronę</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		elements: state.builder.elements
	}
}

export default connect(mapStateToProps,null)(Generator);