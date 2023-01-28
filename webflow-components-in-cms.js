// Use Webflow components inside of CMS posts. YouTube tutorial: https://youtu.be/74dEpZFf1i8
// Ruairi McNicholas, 28/01/2023, ruairi@propellerdigital.agency, https://propellerdigital.agency 
// Code to hide the page body to avoid flashes of content before the components are loaded. Place in <head>

<script>
document.write('<style type="text/css">body{display:none}</style>');
</script>


// Code to load 


<script>

    $( document ).ready(function() {
            
        // Component 

        $("p:contains([cta-1-contact-button])").load('https://rmcn-tutorials.webflow.io/symbols [symbol=cta-button-contact-me]'
        );

        

        // Last component with function to show the body once all components have been loaded in - make sure this is the last component in this list

        $("p:contains([cta-2-section])").load('https://rmcn-tutorials.webflow.io/symbols [symbol=contact-me]', function() {
            $('body').css('display','block');
        });
        
     
    });

</script>




