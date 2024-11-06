const urlParams = new URLSearchParams(window.location.search);
        const newText = urlParams.get('text');
        const newDesc = urlParams.get('desc');
        
        document.getElementById('maindes').textContent=newDesc;
        document.getElementById('blogTitlee').textContent =newText;


