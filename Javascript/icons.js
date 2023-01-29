export function jsFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo js-logo";
  logo.innerHTML =
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNNNNN(``````````````````,#NNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNN(```````````````````````````%NNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNN,```````````````````````````````/NNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNN#```````````````````````````````````#NNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNN#``````````````,(%NNN#/````````````/%NNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNN`````````````(NNNNNNNNNNN%`````*NNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNN%````````````,NNNNNNNNNNNNNN#NNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNN%`````````````%NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNN``````````````,%NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNN%``````````````````(%NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNN``````````````````````,%NNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNN#`````````````````````````,(NNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNN*``````````````````````````,#NNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNNNNN#,`````````````````````````,%NNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNNNNNNNNNN#,```````````````````````%NNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(```````````````````(NNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/```````````````%NNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*````````````*NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%`````````````*NNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%NNNNNNNNNNNNNNN*````````````/NNNNNNNNNNNNNNN#,`%NNNNNNNNNNNNNNNNNNNN#````````````,NNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%,````%NNNNNNNNNNNNN`````````````#NNNNNNNNNNN(````````%NNNNNNNNNNNNNNNNNN,````````````,NNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN#```````````%NNNNNNNNN#``````````````NNNNNNNN*``````````````,%NNNNNNNNNNNNN/``````````````%NNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`````````````````````````````````````NNNNNNNNN%`````````````````````,,,```````````````````/NNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%```````````````````````````````````%NNNNNNNNNNN%,```````````````````````````````````````%NNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%,``````````````````````````````(NNNNNNNNNNNNNNNN/```````````````````````````````````%NNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%`````````````````````````,NNNNNNNNNNNNNNNNNNNNNN%,```````````````````````````,%NNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN#,``````````````*#NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN%(,```````````````,/%NNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function tsFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo ts-logo";
  logo.innerHTML =
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(((((NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(`````````````````````````````````````````````````NNNNNNNNNNNNNNNN.````````````````````/NNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(`````````````````````````````````````````````````NNNNNNNNNNNN(```````````````````````````.NNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(`````````````````````````````````````````````````NNNNNNNNNN*````````````````````````````````NNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(`````````````````````````````````````````````````NNNNNNNNN````````````````````````````````````NNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN((((((((((((((((((`````````````((((((((((((((((((NNNNNNNN``````````````.NNNNNNN(```````````NNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNN(`````````````NNNNNNNNNNNN/````(NNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNN(````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNN(`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNN```````````````,NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNN```````````````````,(NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNN.```````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN.``````````````````````````(NNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````````````````````````,NNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN.`````````````````````````(NNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````````````````````NNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN(.`````````````````NNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN``````````````,NNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`````````````NNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNN*`````NNNNNNNNNNNNNNNNNNN(`````````````NNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNN````````````NNNNNNNNNNNNNNNNN``````````````NNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNN``````````````````*NNNNNNNN,````````````````NNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNN(`````````````````````````````````````````NNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNN(`````````````````````````````````````/NNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNN(```````````````````````````````.NNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN*``````````````````````.NNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>";

  logoParent.appendChild(logo);
  return logoParent;
}

export function reactFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo react-logo";
  logo.innerHTML =
    "<span>````````````````````````````````++ooo++```````````````````````````````````````+++ooo+++```````````````````````````````</span><br>" +
    "<span>````````````````````````````+oNNNNNNNNNNNNoo+````````````````````````````+oNNNNNNNNNNNNNo+````````````````````````````</span><br>" +
    "<span>```````````````````````````oNNNNNNNNNNNNNNNNNNoo`````````````````````+oNNNNNNNNNNNNNNNNNNNo```````````````````````````</span><br>" +
    "<span>`````````````````````````+NNNNNo+``````++oNNNNNNNNo+``````````````+oNNNNNNNNo++``````+oNNNNN+`````````````````````````</span><br>" +
    "<span>`````````````````````````NNNNN+`````````````+oNNNNNNNo``````````oNNNNNNNo+`````````````+NNNNN`````````````````````````</span><br>" +
    "<span>````````````````````````oNNNN+`````````````````+oNNNNNNo+````+oNNNNNNo+`````````````````oNNNNo````````````````````````</span><br>" +
    "<span>````````````````````````NNNNN`````````````````````+NNNNNNo++NNNNNNo+`````````````````````NNNNN````````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo```````````````````````+oNNNNNNNNNNo````````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo`````````````````````````+NNNNNNNN+`````````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo````````````````````````+NNNNNNNNNN+````````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo``````````````````````+NNNNNNooNNNNNo+``````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo`````````````````````oNNNNNo````oNNNNNo`````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>````````````````````````NNNNN```````````````````+NNNNNo```````+NNNNNN+```````````````````NNNNN````````````````````````</span><br>" +
    "<span>````````````````````````NNNNN+`````````````````oNNNNN+``````````+NNNNNo`````````````````+NNNNN````````````````````````</span><br>" +
    "<span>````````````````````````oNNNNo``````````````++NNNNNNNooooooooooooNNNNNNN++``````````````oNNNN+````````````````````````</span><br>" +
    "<span>`````````````````````````NNNNN``++ooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooo++`+NNNNN`````````````````````````</span><br>" +
    "<span>````````````````````````+NNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooNNNNNNNNNNNNNNNNNNNNNNNNNN+````````````````````````</span><br>" +
    "<span>```````````````````+ooNNNNNNNNNNNNNNooo+oNNNNNNo``````````````````````oNNNNNNoooooNNNNNNNNNNNNNNoo+```````````````````</span><br>" +
    "<span>```````````````+oNNNNNNNNNNNNNNo````````oNNNNN+````````````````````````+NNNNNo```````+oNNNNNNNNNNNNNNo++``````````````</span><br>" +
    "<span>```````````+oNNNNNNNNNo++`+NNNNN```````oNNNNo````````````````````````````oNNNNo``````+NNNNN+`++oNNNNNNNNNo+```````````</span><br>" +
    "<span>````````+oNNNNNNNoo+```````oNNNNo````+NNNNNo``````````````````````````````oNNNNN+````oNNNN+```````+ooNNNNNNNo+````````</span><br>" +
    "<span>``````oNNNNNNoo+````````````NNNNN+``+NNNNNo```````````+ooNNNNoo+```````````oNNNNN+``oNNNNo````````````+ooNNNNNNo``````</span><br>" +
    "<span>````oNNNNNNo````````````````+NNNNN++NNNNN+`````````+NNNNNNNNNNNNNN+`````````+NNNNN++NNNNN`````````````````oNNNNNNo````</span><br>" +
    "<span>``+NNNNNo+```````````````````+NNNNNNNNNN+`````````oNNNNNNNNNNNNNNNNo`````````+NNNNNNNNNN+```````````````````+oNNNNN+``</span><br>" +
    "<span>`+NNNNN+``````````````````````oNNNNNNNN+`````````NNNNNNNNNNNNNNNNNNNN`````````+NNNNNNNNo``````````````````````+NNNNN+`</span><br>" +
    "<span>`NNNNN+````````````````````````oNNNNNN+`````````oNNNNNNNNNNNNNNNNNNNNo`````````+NNNNNNo````````````````````````+NNNNN`</span><br>" +
    "<span>`NNNNN`````````````````````````+NNNNNo``````````oNNNNNNNNNNNNNNNNNNNNo``````````oNNNNN+`````````````````````````NNNNN`</span><br>" +
    "<span>`NNNNN+````````````````````````NNNNNNNo`````````+NNNNNNNNNNNNNNNNNNNN+`````````oNNNNNNN````````````````````````+NNNNN`</span><br>" +
    "<span>``NNNNNo``````````````````````oNNNNNNNNo`````````oNNNNNNNNNNNNNNNNNNo`````````oNNNNNNNNN``````````````````````oNNNNN``</span><br>" +
    "<span>```oNNNNNo```````````````````oNNNNNNNNNNo`````````oNNNNNNNNNNNNNNNNo`````````oNNNNNoNNNNo```````````````````oNNNNNo```</span><br>" +
    "<span>````+NNNNNNo+```````````````+NNNNN``NNNNNo``````````oNNNNNNNNNNNNo``````````oNNNNN``NNNNN+```````````````+oNNNNNN+````</span><br>" +
    "<span>``````+oNNNNNNoo+```````````NNNNN+```NNNNNo````````````+oooooo+````````````oNNNNo```+NNNNN```````````+ooNNNNNNo+``````</span><br>" +
    "<span>`````````+oNNNNNNNoo+``````oNNNNo`````oNNNNo``````````````````````````````oNNNNo`````oNNNNo``````+ooNNNNNNNoo`````````</span><br>" +
    "<span>````````````+oNNNNNNNNNoo++NNNNN```````oNNNNN+``````````````````````````+NNNNNo```````NNNNNo+ooNNNNNNNNNo+````````````</span><br>" +
    "<span>````````````````+oNNNNNNNNNNNNNN+++`````+NNNNNo````````````````````````+NNNNN+`````+++NNNNNNNNNNNNNNo+````````````````</span><br>" +
    "<span>````````````````````++ooNNNNNNNNNNNNNNNooNNNNNNo+`````````````````````oNNNNNNooNNNNNNNNNNNNNNNoo++````````````````````</span><br>" +
    "<span>`````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````````````````</span><br>" +
    "<span>`````````````````````````NNNNN````+++oooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooo+++````oNNNN+````````````````````````</span><br>" +
    "<span>````````````````````````oNNNNo````````````````oNNNNNN++++++++++++NNNNNNo````````````````+NNNNo````````````````````````</span><br>" +
    "<span>````````````````````````NNNNN+`````````````````+NNNNNo``````````oNNNNN+``````````````````NNNNN````````````````````````</span><br>" +
    "<span>````````````````````````NNNNN````````````````````oNNNNNo``````+NNNNNo````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo`````````````````````+NNNNNN+``+NNNNNN+`````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo```````````````````````oNNNNNNoNNNNNo```````````````````````oNNNNo```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo`````````````````````````oNNNNNNNNo`````````````````````````oNNNNo```````````````````````</span><br>" +
    "<span>```````````````````````+NNNNo`````````````````````````+NNNNNNNN+`````````````````````````oNNNNo```````````````````````</span><br>" +
    "<span>````````````````````````NNNNo```````````````````````+NNNNNNNNNNNNo```````````````````````oNNNN+```````````````````````</span><br>" +
    "<span>````````````````````````NNNNN+```````````````````+oNNNNNNo``oNNNNNNo+````````````````````NNNNN````````````````````````</span><br>" +
    "<span>````````````````````````+NNNNo````````````````+oNNNNNNN+``````+oNNNNNNo+````````````````oNNNNo````````````````````````</span><br>" +
    "<span>`````````````````````````oNNNNo````````````+oNNNNNNNo+```````````oNNNNNNNo+````````````oNNNNN`````````````````````````</span><br>" +
    "<span>``````````````````````````oNNNNNo+```+++oNNNNNNNNo+````````````````+oNNNNNNNNoo++```+oNNNNNN``````````````````````````</span><br>" +
    "<span>```````````````````````````oNNNNNNNNNNNNNNNNNNo+```````````````````````+oNNNNNNNNNNNNNNNNNo```````````````````````````</span><br>" +
    "<span>`````````````````````````````+oNNNNNNNNNNoo+```````````````````````````````+oNNNNNNNNNNo+`````````````````````````````</span><br>" +
    "<span>``````````````````````````````````+++`````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function sassFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo sass-logo";
  logo.innerHTML =
    "<span>``````````````````````````````````````````````.-::/++ooNNNNNNNooo+//:.````````````````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````.:/+NNNNNNNNNNNNNNNNNNNNNNNNNNNN+:.```````````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````.:+oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/.````````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````-/oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/```````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````-/oNNNNNNNNNNNNNNNNNo+/::-..``````````..:/+NNNNNNNNNo.`````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````./oNNNNNNNNNNNNNNNo+/-.`````````````````````````./NNNNNNNN`````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````-/oNNNNNNNNNNNNNN+/-`````````````````````````````````.oNNNNNN/````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````-/oNNNNNNNNNNNNN+:.``````````````````````````````````````-NNNNNNo````````````````````````````````````````````````</span><br>" +
    "<span>``````````````./oNNNNNNNNNNNNo/-``````````````````````````````````````````.NNNNNNo````````````````````````````````````````````````</span><br>" +
    "<span>````````````-+NNNNNNNNNNNN+:.`````````````````````````````````````````````-NNNNNN/````````````````````````````````````````````````</span><br>" +
    "<span>``````````:oNNNNNNNNNNN+:`````````````````````````````````````````````````oNNNNNN.````````````````````````````````````````````````</span><br>" +
    "<span>````````:oNNNNNNNNNNo:```````````````````````````````````````````````````+NNNNNN/`````````````````````````````````````````````````</span><br>" +
    "<span>``````-oNNNNNNNNNN+-````````````````````````````````````````````````````+NNNNNN+``````````````````````````````````````````````````</span><br>" +
    "<span>`````/NNNNNNNNNN/.````````````````````````````````````````````````````-oNNNNNN+```````````````````````````````````````````````````</span><br>" +
    "<span>```.oNNNNNNNNN+.````````````````````````````````````````````````````.+NNNNNNN/````````````````````````````````````````````````````</span><br>" +
    "<span>``-NNNNNNNNNo:````````````````````````````````````````````````````-+NNNNNNNo-`````````````````````````````````````````````````````</span><br>" +
    "<span>`-NNNNNNNNNo.``````````````````````````````````````````````````.:oNNNNNNNo:```````````````````````````````````````````````````````</span><br>" +
    "<span>`oNNNNNNNNo.````````````````````````````````````````````````.:+NNNNNNNNo:`````````````````````````````````````````````````````````</span><br>" +
    "<span>/NNNNNNNNN-```````````````````o/.```````````````````````.:+oNNNNNNNNN+-```````````````````````````````````````````````````````````</span><br>" +
    "<span>NNNNNNNNNo````````````````````-oN+:-.````````````..-:/ooNNNNNNNNNo+:.`````````````````````````````````````````````````````````````</span><br>" +
    "<span>NNNNNNNNN+`````````````````````./oNNooo+++++++ooooNNNNNNNNNNNo+/-``````````````````````````-::///:.```````````````````````````````</span><br>" +
    "<span>/NNNNNNNNo````````````````````````-/+oNNNNNNNNNNNNNNNNoo+/:-.`````````````````````````````/NNNNNNN:```````````````````````````````</span><br>" +
    "<span>`+NNNNNNNN:```````````````````````````.--::://::::-..````````````````````.://///:````````.NNNNNNNo````````````````````````````````</span><br>" +
    "<span>``+NNNNNNNN:````````````````````````````````````````````````````````````.NNNNNNNo````````+NNNNNNN:````````````````````````````````</span><br>" +
    "<span>```:NNNNNNNN/````````````````````````````````````````...````````````````+NNNNNNN-```````/NNNNNNNN.````````````````````````````````</span><br>" +
    "<span>````.+NNNNNNNo:``````````````````````````````````-/+oNNNo/`````````````:NNNNNNNo```````/NNNNNNNNN.````````````````````````````````</span><br>" +
    "<span>``````-+NNNNNNNo:`````````````````````````````./oNNNNNNNNN/```````````-NNNNNNNN/``````/NNN+/NNNNN/````````````````````````````````</span><br>" +
    "<span>````````./oNNNNNNo/.````````````````````````.+NNNNNN+:-oNNo``````````.NNNNNNNNN+`````/NNN+``oNNNNN.```````````````````````````````</span><br>" +
    "<span>``````````.:oNNNNNNN+:````````````````````./NNNNNN/.```oNNo-:-```````oNNN:oNNNNN````+NNN/```:NNNNNo.```.-://++++++++//-.``````````</span><br>" +
    "<span>`````````````./oNNNNNNo/-``````````````-/+NNNNNNo-````-NNNNNNNo`````oNNN/`:NNNNN/`.oNNN/`````+NNNNNo/+oNNNNNNNNNNNNNNNNNo+/.``````</span><br>" +
    "<span>````````````````-+oNNNNNNo:````````.:+oNNNNNNNNo.`````oNNNNNNN/````+NNN+```oNNNNN/oNNN:```````+NNNNNNNoo+/:-------://+ooNNNNo:````</span><br>" +
    "<span>```````````````````-+oNNNNNo/```-/oNNNNNNNNNNNo.`````:NNNNNNNN````+NNNo````.NNNNNNNNo.```````.+NNNNNNo`````````````````.-/oNNNo-``</span><br>" +
    "<span>``````````````````````:+NNNNNo+NNNNNo/-/NNNNNN.`````.NNNNNNNN/```/NNNo``````-NNNNNNo```````.+NNo/NNNNN-````````````````````.+NNN/`</span><br>" +
    "<span>````````````````````````:NNNNNNNN+:.```NNNNNN/``````oNNNNNNNN```:NNNo.```````/NNNNNN-`````/NNN+.`oNNNN/``````````````````````-oNN-</span><br>" +
    "<span>`````````````````````-/oNNNNNNNNN.````-NNNNNN.`````+NNNNNNNN/``-NNNo.```````/NNNNNNNo````+NNN:``.NNNNN-```````````````````````-NNo</span><br>" +
    "<span>`````````````````.:+NNNNNo/--NNNN+````/NNNNNN`````:NNNNNNNNN``-NNNo.``````-oNNo+NNNNN```oNNN:``.oNNNN/`````````````````````````oNN</span><br>" +
    "<span>``````````````.:+NNNNNo/.````oNNNN````+NNNNNN````-NNNNNNNNN+`-NNNo.``````+NNN+.oNNNNN``:NNNo`-/NNNNo-``````````````````````````NN/</span><br>" +
    "<span>````````````:+NNNNNo/.```````+NNNN-```+NNNNNN```.NNNN+NNNNN/-NNNo.`````:NNNo-.+NNNNN:``+NNNNNNNNo+-``````````````````````````.oN/`</span><br>" +
    "<span>`````````./oNNNNNo-``````````NNNNN-```:NNNNNN/`-NNNN/-NNNNNoNNNo`````.oNNo:-+NNNNNo-```.+oooo+:-```````````````````````````-/o+-``</span><br>" +
    "<span>````````/NNNNNN+-```````````:NNNNN.````NNNNNNNoNNNN+`-NNNNNNNN+`````:NNNNooNNNNNo:`````````````````````````````````````````:-`````</span><br>" +
    "<span>``````-oNNNNNN:````````````.oNNNNo`````-NNNNNNNNNN+```NNNNNNN/``````/NNNNNNo+/-```````````````````````````````````````````````````</span><br>" +
    "<span>`````:NNNNNNN-````````````.oNNNNN-``````:NNNNNNNN/````-oNNo+.`````````....````````````````````````````````````````````````````````</span><br>" +
    "<span>````.NNNNNNN/````````````/NNNNNN/````````./oNNo+-````````.````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````/NNNNNNN-``````````:oNNNNNN/``````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````+NNNNNNN/``````.:+NNNNNNNN:```````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````/NNNNNNNNo+/+oNNNNNNNNNN/`````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````oNNNNNNNNNNNNNNNNNNNN/.``````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````.oNNNNNNNNNNNNNNNo/-`````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>```````-/+ooNNNNoo+:-`````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function githubFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo github-logo";
  logo.innerHTML =
    "<span>```````````````````````````````````````````.-:/+ossyyhhhddhhhyyso+/:-.````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````.:+shdmmmNNNNNNNNNNNNNNNNNNNNNNmmddyo/:.`````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````.:oydmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmdy+-`````````````````````````````````</span><br>" +
    "<span>`````````````````````````````:ohmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmdy+-`````````````````````````````</span><br>" +
    "<span>`````````````````````````./ydNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmds:``````````````````````````</span><br>" +
    "<span>```````````````````````/ymNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNds:```````````````````````</span><br>" +
    "<span>````````````````````-odNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmh+.````````````````````</span><br>" +
    "<span>``````````````````:ymNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNds-``````````````````</span><br>" +
    "<span>````````````````:ymNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNms-````````````````</span><br>" +
    "<span>``````````````-yNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNms.``````````````</span><br>" +
    "<span>````````````.smNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNd+`````````````</span><br>" +
    "<span>```````````/dNNNNNNNNNNNNNNddddmmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmddddmNNNNNNNNNNNNNNh-```````````</span><br>" +
    "<span>``````````sNNNNNNNNNNNNNNNh````.-/ohdmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmdyo:-.```-mNNNNNNNNNNNNNNm+``````````</span><br>" +
    "<span>````````.hNNNNNNNNNNNNNNNN:`````````.:ohmNNNNNNNmmmddddddddddddmmmNNNNNNNdy+-``````````oNNNNNNNNNNNNNNNNs`````````</span><br>" +
    "<span>```````-dNNNNNNNNNNNNNNNNd``````````````./yys+/:--..``````````..--:/oshy:.`````````````.NNNNNNNNNNNNNNNNNh.```````</span><br>" +
    "<span>``````:mNNNNNNNNNNNNNNNNNs``````````````````````````````````````````````````````````````dNNNNNNNNNNNNNNNNNd.``````</span><br>" +
    "<span>`````:mNNNNNNNNNNNNNNNNNNs``````````````````````````````````````````````````````````````dNNNNNNNNNNNNNNNNNNd.`````</span><br>" +
    "<span>````-mNNNNNNNNNNNNNNNNNNNh``````````````````````````````````````````````````````````````mNNNNNNNNNNNNNNNNNNNh`````</span><br>" +
    "<span>````dNNNNNNNNNNNNNNNNNNNNm.````````````````````````````````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNs````</span><br>" +
    "<span>```sNNNNNNNNNNNNNNNNNNNNNm/````````````````````````````````````````````````````````````smNNNNNNNNNNNNNNNNNNNNN/```</span><br>" +
    "<span>``-NNNNNNNNNNNNNNNNNNNNNh-``````````````````````````````````````````````````````````````/dNNNNNNNNNNNNNNNNNNNNd```</span><br>" +
    "<span>``hNNNNNNNNNNNNNNNNNNNNs`````````````````````````````````````````````````````````````````.dNNNNNNNNNNNNNNNNNNNNo``</span><br>" +
    "<span>`-NNNNNNNNNNNNNNNNNNNNy```````````````````````````````````````````````````````````````````.dNNNNNNNNNNNNNNNNNNNm``</span><br>" +
    "<span>`sNNNNNNNNNNNNNNNNNNNd`````````````````````````````````````````````````````````````````````-NNNNNNNNNNNNNNNNNNNN/`</span><br>" +
    "<span>`mNNNNNNNNNNNNNNNNNNN+``````````````````````````````````````````````````````````````````````yNNNNNNNNNNNNNNNNNNNy`</span><br>" +
    "<span>-NNNNNNNNNNNNNNNNNNNN.``````````````````````````````````````````````````````````````````````/NNNNNNNNNNNNNNNNNNNm`</span><br>" +
    "<span>/NNNNNNNNNNNNNNNNNNNm```````````````````````````````````````````````````````````````````````-NNNNNNNNNNNNNNNNNNNN.</span><br>" +
    "<span>+NNNNNNNNNNNNNNNNNNNd```````````````````````````````````````````````````````````````````````.NNNNNNNNNNNNNNNNNNNN-</span><br>" +
    "<span>oNNNNNNNNNNNNNNNNNNNm```````````````````````````````````````````````````````````````````````:NNNNNNNNNNNNNNNNNNNN-</span><br>" +
    "<span>+NNNNNNNNNNNNNNNNNNNN.``````````````````````````````````````````````````````````````````````+NNNNNNNNNNNNNNNNNNNN-</span><br>" +
    "<span>/NNNNNNNNNNNNNNNNNNNN+``````````````````````````````````````````````````````````````````````yNNNNNNNNNNNNNNNNNNNN.</span><br>" +
    "<span>-NNNNNNNNNNNNNNNNNNNNh`````````````````````````````````````````````````````````````````````.mNNNNNNNNNNNNNNNNNNNm`</span><br>" +
    "<span>`mNNNNNNNNNNNNNNNNNNNN/````````````````````````````````````````````````````````````````````sNNNNNNNNNNNNNNNNNNNNy`</span><br>" +
    "<span>`sNNNNNNNNNNNNNNNNNNNNm.``````````````````````````````````````````````````````````````````:NNNNNNNNNNNNNNNNNNNNN/`</span><br>" +
    "<span>`-NNNNNNNNNNNNNNNNNNNNNh`````````````````````````````````````````````````````````````````-mNNNNNNNNNNNNNNNNNNNNm``</span><br>" +
    "<span>``hNNNNNNNNNNNNNNNNNNNNNd-``````````````````````````````````````````````````````````````/mNNNNNNNNNNNNNNNNNNNNNo``</span><br>" +
    "<span>``-NNNNNNNNNNNNNNNNNNNNNNm+```````````````````````````````````````````````````````````.smNNNNNNNNNNNNNNNNNNNNNd```</span><br>" +
    "<span>```sNNNNNNNNNNNNNNNNNNNNNNNd+```````````````````````````````````````````````````````.omNNNNNNNNNNNNNNNNNNNNNNN:```</span><br>" +
    "<span>````dNNNNNNNNNNNNNNNNNNNNNNNNms:`````````````````````````````````````````````````./ymNNNNNNNNNNNNNNNNNNNNNNNNs````</span><br>" +
    "<span>````.mNNNNNNNNNdsooshmNNNNNNNNNNdy+:.````````````````````````````````````````-/ohmNNNNNNNNNNNNNNNNNNNNNNNNNNh`````</span><br>" +
    "<span>`````:mNNNNNNNNh-```:+:smNNNNNNNNNNNmdhso/:--.``````````````````````.-:/+oyhdmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh.`````</span><br>" +
    "<span>``````:mNNNNNNNNmh+.``.s:sNNNNNNNNNNNNNNNNNmm+`````````````````````.ymmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh.``````</span><br>" +
    "<span>```````-dNNNNNNNNNNd+``.`-+mNNNNNNNNNNNNNNNN/````````````````````````sNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh.```````</span><br>" +
    "<span>````````.hNNNNNNNNNNNh.``s/-yNNNNNNNNNNNNNNs``````````````````````````hNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNs`````````</span><br>" +
    "<span>``````````sNNNNNNNNNNNd.```-s+sdmNNNNNNNNmh.``````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNm+``````````</span><br>" +
    "<span>```````````:dNNNNNNNNNNd.```/.`:o++oss+/++.```````````````````````````.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh-```````````</span><br>" +
    "<span>````````````.smNNNNNNNNNd:`````-+-``ss``/o.````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNd+`````````````</span><br>" +
    "<span>``````````````-ymNNNNNNNNmy:```````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNms.``````````````</span><br>" +
    "<span>````````````````:ymNNNNNNNNNdy+:-..````...-````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNms-````````````````</span><br>" +
    "<span>``````````````````:ymNNNNNNNNNNNmmddddddmmd````````````````````````````NNNNNNNNNNNNNNNNNNNNNNds-``````````````````</span><br>" +
    "<span>````````````````````-odNNNNNNNNNNNNNNNNNNNd```````````````````````````.NNNNNNNNNNNNNNNNNNNmh+.````````````````````</span><br>" +
    "<span>```````````````````````:ydNNNNNNNNNNNNNNNNd```````````````````````````.NNNNNNNNNNNNNNNNNds:```````````````````````</span><br>" +
    "<span>`````````````````````````./ydmNNNNNNNNNNNNd```````````````````````````.NNNNNNNNNNNNNmds:``````````````````````````</span><br>" +
    "<span>`````````````````````````````:ohmNNNNNNNNNd```````````````````````````.NNNNNNNNNmdy+-`````````````````````````````</span><br>" +
    "<span>````````````````````````````````.:+ydmNNNms````````````````````````````dNNNmmds+-`````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````.://:``````````````````````````````://-.`````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function gitlabFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo gitlab-logo";
  logo.innerHTML =
    "<span>``````````````````oOo``````````````````````````````````````````````````````````````oOo``````````````````</span><br>" +
    "<span>````````````````iNNNNNNO`````````````````````````````````````````````````````````NNNNNN#````````````````</span><br>" +
    "<span>```````````````iNNNNNNNNo```````````````````````````````````````````````````````SNNNNNNNN```````````````</span><br>" +
    "<span>``````````````ONNNNNNNNNN``````````````````````````````````````````````````````SNNNNNNNNNN``````````````</span><br>" +
    "<span>`````````````iNNNNNNNNNNNN````````````````````````````````````````````````````oNNNNNNNNNNNN`````````````</span><br>" +
    "<span>````````````ONNNNNNNNNNNNNi``````````````````````````````````````````````````o#NNNNNNNNNNNN#````````````</span><br>" +
    "<span>```````````ONNNNNNNNNNNNNNNi`````````````````````````````````````````````````NNNNNNNNNNNNNNNN```````````</span><br>" +
    "<span>``````````oNNNNNNNNNNNNNNNNNo```````````````````````````````````````````````NNNNNNNNNNNNNNNNNN``````````</span><br>" +
    "<span>`````````oNNNNNNNNNNNNNNNNNN#o`````````````````````````````````````````````iNNNNNNNNNNNNNNNNNNN`````````</span><br>" +
    "<span>````````oNNNNNNNNNNNNNNNNNNNNN````````````````````````````````````````````iNNNNNNNNNNNNNNNNNNNNS````````</span><br>" +
    "<span>```````oNNNNNNNNNNNNNNNNNNNNNNN``````````````````````````````````````````oNNNNNNNNNNNNNNNNNNNNNNN```````</span><br>" +
    "<span>``````oNNNNNNNNNNNNNNNNNNNNNNNNi````````````````````````````````````````o#NNNNNNNNNNNNNNNNNNNNNNNi``````</span><br>" +
    "<span>``````NNNNNNNNNNNNNNNNNNNNNNNNNNO```````````````````````````````````````SNNNNNNNNNNNNNNNNNNNNNNNNNS`````</span><br>" +
    "<span>````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNi````</span><br>" +
    "<span>````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNi```</span><br>" +
    "<span>```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNi``</span><br>" +
    "<span>``SSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSO`</span><br>" +
    "<span>`iSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSo</span><br>" +
    "<span>`SSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSi</span><br>" +
    "<span>oSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSi</span><br>" +
    "<span>oSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSi</span><br>" +
    "<span>`SSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSi</span><br>" +
    "<span>`iSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS`</span><br>" +
    "<span>``SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSo`</span><br>" +
    "<span>```iSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSo``</span><br>" +
    "<span>````OSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS````</span><br>" +
    "<span>``````iSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSo`````</span><br>" +
    "<span>````````OSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSi````````</span><br>" +
    "<span>```````````OSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSNNSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSi```````````</span><br>" +
    "<span>``````````````oiSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSiiiiiSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSO``````````````</span><br>" +
    "<span>``````````````````iSSSSSSSSSSSSSSSSSSSSSSSSSSSiiiiiiiiiiiiSSSSSSSSSSSSSSSSSSSSSSSSSSSSo`````````````````</span><br>" +
    "<span>`````````````````````OSSSSSSSSSSSSSSSSSSSSSiiiiiiiiiiiiiiiiiiSSSSSSSSSSSSSSSSSSSSSi`````````````````````</span><br>" +
    "<span>````````````````````````oiSSSSSSSSSSSSSSiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSSSSSSSSSO````````````````````````</span><br>" +
    "<span>````````````````````````````iSSSSSSSSiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSSSSSSSSo```````````````````````````</span><br>" +
    "<span>```````````````````````````````OSiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSi```````````````````````````````</span><br>" +
    "<span>```````````````````````````````````iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiio``````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````Oiiiiiiiiiiiiiiiiiiiiiiiiiiio`````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````oiiiiiiiiiiiiiiiiiiiiO`````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````oiiiiiiiiiiiiiio````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````Oiiiiiiio```````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function nodeFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo node-logo";
  logo.innerHTML =
    "<span>````````````````````````````````````````````````````````````````````````````````````````````NNNN(```````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````NNNNNNNN````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````NNNNNNNN````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````NNNNNNNN````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````NNNNNNNN````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````NNNNNNNN````````````````````````````````````````</span><br>" +
    "<span>`````````````````nNNN#``````````````````````````````SSSn``````````````````````````````NN#```NNNNNNNN```````````````````SNN#`````````````````</span><br>" +
    "<span>`````````````oNNNNNNNNNNNN`````````````````````nSSSSSSSSSSSS``````````````````````NNNNNNNNNNNNNNNNNN```````````````#NNNNNNNNNNN`````````````</span><br>" +
    "<span>`````````NNNNNNNNNNNNNNNNNNNNNn````````````SSSSSSSSSSSSSSSSSSSSS`````````````#NNNNNNNNNNNNNNNNNNNNNN```````````NNNNNNNNNNNNNNNNNNNNS````````</span><br>" +
    "<span>```````NNNNNNNNNNNNNNNNNNNNNNNNNn````````SSSSSSSSSSSSSSSSSSSSSSSSS`````````NNNNNNNNNNNNNNNNNNNNNNNNN````````SNNNNNNNNNNNNNNNNNNNNNNNNN``````</span><br>" +
    "<span>```````NNNNNNNNNN(````NNNNNNNNNNn````````SSSSSSSSSSSSSSSSSSSSSSSSS`````````NNNNNNNNNN#```#NNNNNNNNNN````````SNNNNNNNNNN````NNNNNNNNNNN``````</span><br>" +
    "<span>```````NNNNNNNNo````````NNNNNNNNn````````SSSSSSSSSSSSSSSSSSSSSSSSS`````````NNNNNNNN`````````NNNNNNNN````````SNNNNNNNN``SSSS(`#NNNNN(````````</span><br>" +
    "<span>```````NNNNNNNNo````````NNNNNNNNn````````SSSSSSSSSSSSSSSSSSSSSSSSS`````````NNNNNNNN`````````NNNNNNNN````````SNNNNNNNN``SSSS(`#N`````````````</span><br>" +
    "<span>```````NNNNNNNNo````````NNNNNNNNn````````SSSSSSSSSSSSSSSSSSSSSSSSS`````````NNNNNNNNNN(```oNNNNNNNNNN````````SNNNNNNNNNN(````````````````````</span><br>" +
    "<span>```````NNNNNNNNo````````NNNNNNNNn````````SSSSSSSSSSSSSSSSSSSSSSSSS`````````NNNNNNNNNNNNNNNNNNNNNNNNN````````SNNNNNNNNNNNNNNN````````````````</span><br>" +
    "<span>```````NNNNNo``````````````NNNNNn``````````nSSSSSSSSSSSSSSSSSSSn`````````````NNNNNNNNNNNNNNNNNNNN#`````````````#NNNNNNNNNNNNNNNN````````````</span><br>" +
    "<span>```````#```````````````````````#````````````````SSSSSSSSSSS``````````````````````oNNNNNNNNNNNn`````````````````````nNNNNNNNNNN#`````````````</span><br>" +
    "<span>````````````````````````````````````````````````````(S(``````````````````````````````nNNN```````````````````````````````NNn`````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function nestFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo nest-logo";
  logo.innerHTML =
    "<span>``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````O%%%O,```````````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````````````````ONNNNN/````/NO,````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````ONNNNN%``,NNNNNNO`````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````ONNNN,``ONNNNNNNNNNN``````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````````````````ONN,`/NNNNNNNNNNNNNNNNN````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````````````ON/`/NNNNNNNNNNNNNNNNNNNN/``````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````,,//MMMMMMMM//,,```````````````OM`NNNNNNNNNNNNNNNNNNNNNNNO`````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````MONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOM/`````,,NNNNNNNNNNNNNNNNNNNNNNNNO````````````````````````````````</span><br>" +
    "<span>````````````````````````````````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOM,ONNNNNNNNNNNNNNNNNNNNNNNN/```````````````````````````````</span><br>" +
    "<span>````````````````````````````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM```````````````````````````````</span><br>" +
    "<span>`````````````````````````,ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM```````````````````````````````</span><br>" +
    "<span>```````````````````````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/````````OO`````````````````````</span><br>" +
    "<span>````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO````````,NNNN```````````````````</span><br>" +
    "<span>````````````````MONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO`````````ONNNNNO`````````````````</span><br>" +
    "<span>```````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`````````NNNNNNNNNM```````````````</span><br>" +
    "<span>````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````MNNNNNNNNNNNN``````````````</span><br>" +
    "<span>``/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````/NNNNNNNNNNNNNNNM````````````</span><br>" +
    "<span>`MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN``````````NNNNNNNNNNNNNNNNNNNO```````````</span><br>" +
    "<span>`/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````````/NNNNNNNNNNNNNNNNNNNNNNNO``````````</span><br>" +
    "<span>```/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO/,````````,MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO`````````</span><br>" +
    "<span>``````,NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````</span><br>" +
    "<span>```````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/```````</span><br>" +
    "<span>`````````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````</span><br>" +
    "<span>`````````````ONN/NNNNNOOO/MM/'''/M/OOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN,`````</span><br>" +
    "<span>`````````````OO`MNNO```````````````````````,/ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`````</span><br>" +
    "<span>````````````````MO```````````````````````````````MONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN,````</span><br>" +
    "<span>`````````````````````````````````````````````````````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/````</span><br>" +
    "<span>````````````````````````````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO````</span><br>" +
    "<span>```````````````````````````````````````````````````````````ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````%NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````</span><br>" +
    "<span>````````````````````````````````````/NNNNNNM````````````````````````NNNNNNNNNNNNNN/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM`````</span><br>" +
    "<span>`````````````````````````````````,NNNNNNNNNN/```````````````````````MNNNNNNNNNNNN/,NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN``````</span><br>" +
    "<span>````````````````````````````````MNNNNNNNNNNM````````````/````,NNNNNM`ONNNNNNNNNNO``%NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOONNNNNNNN```````</span><br>" +
    "<span>```````````````````````````````,NNNNNNNNNNN,```````````MO```ONNNNNNNNONNNNNNNNNO```%NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN,MNNNNNNN,```````</span><br>" +
    "<span>````````````````````````````````NNNNNNNNNNNN/`````````ONO`/NNNNNNNNNNNNNNNNNNN/```,NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO`,NNNNNN,````````</span><br>" +
    "<span>````````````````````````````````MNNNNNNNNNNNNNNNM,``/NNNNNNNNNNNNNNNNNNNNNNNN,````MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```%NNNN``````````</span><br>" +
    "<span>`````````````````````````````````ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN,```NNNO```````````</span><br>" +
    "<span>``````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN,```````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````NN/````````````</span><br>" +
    "<span>````````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM`````````ONNNNNNNNNNNNNNNNNNNNNNNNNOMNNNNNNNNN``````O``````````````</span><br>" +
    "<span>``````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNO,```````````NNNNNNNNNNNNNNNNNNNNNNNNNNM,NNNNNNNNO``````````````````````</span><br>" +
    "<span>`````````````````````````````````````,/ONNNNNNNNNNNNNNNNNNNNN//``````````````/NNNNNNNNNNNNNNNNNNNNNNNNNO``/NNNNNNN,```````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````,,,///,,`````````````````````MNNNNNNNNNNNNNNNNNNNNNNNNNO```/NNNNNN/`````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````ONNNNNNNNNOONNNNNNNNNNNNNN/````/NNNNN/```````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````/NNNNN//,```/NNNNNNNNNNNNNN,`````MNNNNM`````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````MNNNNNNNNNNNNN/```````ONNN,```````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````,NNNNNNNNNNNNO,`````````NNM``````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````````````ONNNNNNNNNNN/```````````//`````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````````,NNNNNNNNNN/```````````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````ONNNNN%/,`````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function mongoFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo mongo-logo";
  logo.innerHTML =
    "<span>`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````.o``````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````oooO`````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````,oooooOO%```````````````````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````OoooooooOOOOO`````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````ooooooooooOOOOOOO.``````````````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````ooooooooooooOOOOOOOOO.````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````ooooooooooooooOOOOOOOOOOO```````````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````.oOoooooooooooooOOOOOOOOOOOOO`````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````ooOoOooooooooooooOOOOOOOOOOOOOO.```````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````OoooooooooooooooooOOOOOOOOOOOOOOOO``````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````OOoooooooooooooooooOOOOOOOOOOOOOOOOO`````````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````OOOOooooooooooooooooOOOOOOOOOOOOOOOOOO````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````oOOOoooOoooooooooooooOOOOOOOOOOOOOOOOOOO```````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````oOOOOOOoooooooooooooooOOOOOOOOOOOOOOOOOOOo``````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````OOOOOoOOOOooooOoooooooOOOOOOOOOOOOOOOOOOOO,`````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````%OOOOOoOoOooOooooooooooOOOOOOOOOOOOOOOOOOOOO`````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````OOOOOOOOOOOooooOoooooooOOOOOOOOOOOOOOOOOOOOO%````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````OOOOOOOOOOOoOOoooooooooOOOOOOOOOOOOOOOOOOOOOO````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````%OOOOOOOOOOOOOoOOoooooooOOOOOOOOOOOOOOOOOOOOOO````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````%OOOOOOOOoOoOOooooooooooOOOOOOOOOOOOOOOOOOOOOO````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````%OOOOOOOOOOOOOooooooOoooOOOOOOOOOOOOOOOOOOOOOO````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````.OOOOOOOOOOOOOOOooooooooOOOOOOOOOOOOOOOOOOOOOO````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````OOOOOOOOOOOOOOOOoooooooOOOOOOOOOOOOOOOOOOOOOO````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````,OOOOOOOOOOOOOOOOOooooOOOOOOOOOOOOOOOOOOOOOO,````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````OOOOOOOOOOOooOOOooooooOOOOOOOOOOOOOOOOOOOOO`````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````OOOOOOOOOOOOOOOOoooooOOOOOOOOOOOOOOOOOOOO``````````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````OOOOOOOOOOOoOooOooooOOOOOOOOOOOOOOOOOOO,``````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````OOOOOOOOOOOoOoOOoooOOOOOOOOOOOOOOOOOO.```````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````OOOOOOOOOOOOOOOOooOOOOOOOOOOOOOOOOO`````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````,OOOOOOOOOOOOooOoOOOOOOOOOOOOOOOO``````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````oOOOOOOOOoOOoooOOOOOOOOOOOOOO,```````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````OOOOOOOOOOOO%OOOOOOOOOOOO%`````````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````oOOOOOOOOO%OOOOOOOOOO%```````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````,OOOOOOo%oOOOOOOO``````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````oOOO%%,oOOO%````````````````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````%%,%,,```````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````,%,,````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````.,,.````````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````,,`````````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````,.`````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````````````````````.%OOO,.``.%OOOOO```````.oOOO...%OOOO.```</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````````````````````````````````OOO`````````%OOO.``````OOO``````OOO.``</span><br>" +
    "<span>````.o```%O%`````%Oo.```````````,oOO,`````````.%.``%SO,``````````%OO%```````````.oOO%``````````OOO```````````OOO.`````OOO``````OOo```</span><br>" +
    "<span>``,MNNO```.NNNM,```NNN%`````.NN`````ONNN````,MNNM,``.MNNO````.NN````%NNoO.```MN.````%NNM```````OOO```````````oOOO`````OOOOOOOOOO,````</span><br>" +
    "<span>```MNN``````NN,`````SNM````%NN.``````.NNN````SNN.`````MNM````MNS`````MNO````NN%```````MNM``````OOO```````````oOOo`````OOO``````%OOO.`</span><br>" +
    "<span>```MNN``````NN,`````SNM````ONN,```````MNM````ONN.`````MNM````,NNS```OMo````.NNo```````SNM``````OOO```````````OOO`````.OOO```````%OOO`</span><br>" +
    "<span>```MNN`````.NN,`````SNM`````MNN``````.NM`````NNN.`````MNN``````,M```````````NNNo``````MN,``````OOO`````````OOO```````.OOO```````OOO``</span><br>" +
    "<span>`SMNNNMS`.MNNNNN,`%MNNNMN`````NNNMSNMS`````SMNNNNM.`SMNNNNM```NNNNNNNNMM%`````SNNMSSMN.`````.OOOOOOOOOOOOO%````````OOOOOOOOOOOOo.````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````NS```````NNM```````````````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````oNM````````SN.```````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````,NNNNNSNMN``````````````````````````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function unityFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo unity-logo";
  logo.innerHTML =
    "<span>`````````````````````````````````````````````````````````````````````````````````````NNNN```````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````NNNNNNNNNNNNN``````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNN`````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````</span><br>" +
    "<span>```````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````</span><br>" +
    "<span>````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````</span><br>" +
    "<span>```````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````</span><br>" +
    "<span>``````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````</span><br>" +
    "<span>`````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNN````NNNNNNNNNNNNNNNNNNNNN``````</span><br>" +
    "<span>````````````````````````````````````````````NNNNNNNNNNNNNNNNN```````````NNNNNNNNNNNNNNNNNNNNNN``````</span><br>" +
    "<span>``````````````````````````````````````````NNNNNNNNNNNN`````````````````NNNNNNNNNNNNNNNNNNNNNNNN`````</span><br>" +
    "<span>`````````````````````````````NNNNNNNNNNNNNNNNN````````````````````````NNNNNNNNNNNN``NNNNNNNNNNN`````</span><br>" +
    "<span>```````````````````````````NNNNNNNNNNNNNNN```````````````````````````NNNNNNNNNNNN```NNNNNNNNNNNN````</span><br>" +
    "<span>`````````````````````````NNNNNNNNNNNNNNN````````````````````````````NNNNNNNNNNNN`````NNNNNNNNNNN````</span><br>" +
    "<span>``````````````````````NNNNNNNNNNNNNNNN````````````````````````````NNNNNNNNNNNN```````NNNNNNNNNNNN```</span><br>" +
    "<span>`````````````````````NNNNNNNNNNNNNNN`````````````````````````````NNNNNNNNNNNN`````````NNNNNNNNNNNN``</span><br>" +
    "<span>```````````````````NNNNNNNNNNNNNNN``````````````````````````````NNNNNNNNNNNN``````````NNNNNNNNNNNN``</span><br>" +
    "<span>`````````````````NNNNNNNNNNNNNNN```````````````````````````````NNNNNNNNNNNN````````````NNNNNNNNNNNN`</span><br>" +
    "<span>```````````````NNNNNNNNNNNNNNN````````````````````````````````NNNNNNNNNNNN`````````````NNNNNNNNNNNN`</span><br>" +
    "<span>`````````````NNNNNNNNNNNNNNN`````````````````````````````````NNNNNNNNNNNN```````````````NNNNNNNNNNNN</span><br>" +
    "<span>```````````NNNNNNNNNNNNNNN``````````````````````````````````NNNNNNNNNNNN`````````````````NNNNNNNNNNN</span><br>" +
    "<span>`````````NNNNNNNNNNNNNNNN`````````````````````````````````NNNNNNNNNNNN```````````````````NNNNNNNNNN`</span><br>" +
    "<span>```````NNNNNNNNNNNNNNNN``````````````````````````````````NNNNNNNNNNNN`````````````````````NNNNNNNN``</span><br>" +
    "<span>`````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN``````````````````````NNNNNNN```</span><br>" +
    "<span>```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````````````````````NNNNN````</span><br>" +
    "<span>`NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````````````````NNNN`````</span><br>" +
    "<span>`NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````````````````````NNNN`````</span><br>" +
    "<span>```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````````````````````NNNNN````</span><br>" +
    "<span>`````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN``````````````````````NNNNNNN```</span><br>" +
    "<span>```````NNNNNNNNNNNNNNNN``````````````````````````````````NNNNNNNNNNNN`````````````````````NNNNNNNN``</span><br>" +
    "<span>`````````NNNNNNNNNNNNNNNN``````````````````````````````````NNNNNNNNNNNN``````````````````NNNNNNNNNN`</span><br>" +
    "<span>```````````NNNNNNNNNNNNNNNN`````````````````````````````````NNNNNNNNNNNN`````````````````NNNNNNNNNNN</span><br>" +
    "<span>`````````````NNNNNNNNNNNNNNNN````````````````````````````````NNNNNNNNNNNN```````````````NNNNNNNNNNNN</span><br>" +
    "<span>```````````````NNNNNNNNNNNNNNNN```````````````````````````````NNNNNNNNNNNN`````````````NNNNNNNNNNNN`</span><br>" +
    "<span>`````````````````NNNNNNNNNNNNNNN```````````````````````````````NNNNNNNNNNNN````````````NNNNNNNNNNNN`</span><br>" +
    "<span>```````````````````NNNNNNNNNNNNNNN``````````````````````````````NNNNNNNNNNNN``````````NNNNNNNNNNNN``</span><br>" +
    "<span>`````````````````````NNNNNNNNNNNNNNN`````````````````````````````NNNNNNNNNNNN`````````NNNNNNNNNNN```</span><br>" +
    "<span>```````````````````````NNNNNNNNNNNNNNN````````````````````````````NNNNNNNNNNNNN``````NNNNNNNNNNNN```</span><br>" +
    "<span>`````````````````````````NNNNNNNNNNNNNNN````````````````````````````NNNNNNNNNNNN`````NNNNNNNNNNN````</span><br>" +
    "<span>```````````````````````````NNNNNNNNNNNNNNN```````````````````````````NNNNNNNNNNNN```NNNNNNNNNNNN````</span><br>" +
    "<span>`````````````````````````````NNNNNNNNNNNNNNNNN````````````````````````NNNNNNNNNNNN``NNNNNNNNNNN`````</span><br>" +
    "<span>``````````````````````````````````````````NNNNNNNNNNNN`````````````````NNNNNNNNNNNNNNNNNNNNNNNN`````</span><br>" +
    "<span>````````````````````````````````````````````NNNNNNNNNNNNNNNNNN``````````NNNNNNNNNNNNNNNNNNNNNN``````</span><br>" +
    "<span>`````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNN````NNNNNNNNNNNNNNNNNNNNN``````</span><br>" +
    "<span>``````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````</span><br>" +
    "<span>```````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````</span><br>" +
    "<span>````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````</span><br>" +
    "<span>````````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNN`````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNN`````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````````````NNNNNNNNNNNN``````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````````````NNNN```````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function linuxFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo linux-logo";
  logo.innerHTML =
    "<span>``````````````````````````````````````````````.O(SMMMMNS(n,.`````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````,SMNNNNNNNNNNNNNNNMN(``````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````SMNNNNNNNNNNNNNNNNNNNNNNN,```````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````(MNNNNNNNNNNNNNNNNNNNNNNNNNM(``````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````(MNNNNNNNNNNNNNNNNNNNNNNNNNNNMN`````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````OMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMn````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````(MNNNNNNNNNNNNNNNNNMNMNNNNNNNNNNN.```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````(MNn..ONNNNNNNNMS,`````.NMNNNNNNN.```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````SS.``.``OMNNNNM,``.OO.```(MNNNNNN,```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````SS`nMNMS`(MNNM(`.NNNNMn``ONNNNNNN.```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````(M,OMNNMO((((S(O,NNNNMO`.SMNNNNNN.```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````nMM(n(O,OO,,OOO,,OOn((,OMNNNNNNNN,```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````nMSO,,,,,,,,,,,,,,,,,,,,ONMNNNNNNO```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````nSO,,,,,,,,,,,,,,,,,O(O,OSMNNNNNM(```````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````NNNS((OO,,,,,,OOO((,OO(n.SNNNNNNNM(``````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````SMNM`.nOOOOnnOO,,,OO(O````nMNNNNNNNN@.````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````SMNMn````,(nnnnnnnn.```````.NNNNNNNNNNN(```````````````````````````````</span><br>" +
    "<span>````````````````````````````````.SMNNS.```````````````````````nMNNNNNNNNNNN,`````````````````````````````</span><br>" +
    "<span>```````````````````````````````,MNNNNO`````````````````````````SMNNNNNNNNNNNS.```````````````````````````</span><br>" +
    "<span>``````````````````````````````(MNNNNS```````````````````````````(MNNNNNNNNNNNMO``````````````````````````</span><br>" +
    "<span>````````````````````````````.NNNNNMn`````````````````````````````(MNNNNNNNNNNNNM.````````````````````````</span><br>" +
    "<span>```````````````````````````SMNNNNM,```````````````````````````````SNNNNNNNNNNNNNM(```````````````````````</span><br>" +
    "<span>`````````````````````````ONNNNNNNO`````````````````````````````````SMNNNNNNNNNNNNNN.`````````````````````</span><br>" +
    "<span>````````````````````````SMNMSSMS````````````````````````````````````.SNM(SNNNNNNNNNM(````````````````````</span><br>" +
    "<span>``````````````````````nMNMSnMN,``````````````````````````````````````.SNNNOSMNNNNNNNMS.``````````````````</span><br>" +
    "<span>````````````````````.SMNN(SMN,`````````````````````````````````````````NNNMn,MNNNNNNNNN``````````````````</span><br>" +
    "<span>```````````````````,MNNNSnMMO```````````````````````````````````````````NNNMOONNNNNNNNNM.````````````````</span><br>" +
    "<span>``````````````````nMNNNM,NM(````````````````````````````````````````````,NNNS.NNNNNNNNNNN.```````````````</span><br>" +
    "<span>`````````````````nNNNNMn,MN``````````````````````````````````````````````(MNS.SNNNNNNNNNNO```````````````</span><br>" +
    "<span>````````````````.SNNNNMO,MO``````````````````````````````````````````````nNM,,NNNNNNNNNNM(```````````````</span><br>" +
    "<span>````````````````,NNNNNMS`(,``````````````````````````````````````````````nM..SNNNNNNNNNNNn```````````````</span><br>" +
    "<span>````````````````,NNMNNNMO```````````````````````````````````````````````,nSNMMMMMNS((NNNN,```````````````</span><br>" +
    "<span>```````````````ONnO,,OSMNn```````````````````````````````````````````.ONNNNNNNNNNNNNNNMMN,.``````````````</span><br>" +
    "<span>`````````````.SO,,,,,,,,(MMn````````````````````````````````````````NOOMNNNNNNNNNNNNN(O,,,OSS````````````</span><br>" +
    "<span>``````````,nS(O,,,,,,,,,,OSNMNO````````````````````````````````````nn,,(MNNNNNNNNNNNO,,,,,,,nn```````````</span><br>" +
    "<span>```ONSnOOOO,,,,,,,,,,,,,,,,ONNNNN(`````````````````````````````````Sn,,,SMNNNNNNN(O,,,,,,,,,O(.``````````</span><br>" +
    "<span>``(n,,,,,,,,,,,,,,,,,,,,,,,,,(NNNNNMS.`````````````````````````````NO,,,,OOOOOO,,,,,,,,,,,,,,ON.`````````</span><br>" +
    "<span>``NO,,,,,,,,,,,,,,,,,,,,,,,,,,O(MNNNNN@.```````````````````````````MO,,,,,,,,,,,,,,,,,,,,,,,,,,,N(```````</span><br>" +
    "<span>``Sn,,,,,,,,,,,,,,,,,,,,,,,,,,,,OSMNNMN``````````````````````````.NNO,,,,,,,,,,,,,,,,,,,,,,,,,,,,,n@O````</span><br>" +
    "<span>``n(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,OMn`````````````````````````.(MNNN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,nS.``</span><br>" +
    "<span>``(O,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,nNn.`````````````````.O(MMNNNNM(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,OSn```</span><br>" +
    "<span>`,(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,nNNMMMNSSSSSSNNMMMNNNNNNNNNNN,,,,,,,,,,,,,,,,,,,,,,,,,,,,,OS(.`````</span><br>" +
    "<span>`nO,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(MNNNNNNNNNNNNNNNNNNNNNNNNn,,,,,,,,,,,,,,,,,,,,,,,,,OSS,`````````</span><br>" +
    "<span>`,NO,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,nNNNNMMMMMMMMMMMMNNNNNNNNNO,,,,,,,,,,,,,,,,,,,,,O(NO`````````````</span><br>" +
    "<span>````.OS@NSn,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(n```````````````````,(MMNO,,,,,,,,,,,,,,,,,,OSS.````````````````</span><br>" +
    "<span>``````````````.O(M@M(O,,,,,,,,,,,,,,,,O@,````````````````````````n(,,,,,,,,,,,,,,,OM(````````````````````</span><br>" +
    "<span>```````````````````````,SMSnOOOOOOOOSS.```````````````````````````.M(OO,,,,,,,OOS(```````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````.nSNNNSn.``````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````O((O```````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>`(NNNNNNNNNNn````````````(NNNNS``````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````nNNNNn````````````````OSSO```````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````nNNNNn```````````````````````````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>````nNNNNn`````````````,(NNNNN.````OSMNNNS,,SMNNNNNNN.````,nNNNNNn````.nNMNNN(```ONNNNNNNNN``.SNNNNNN,```</span><br>" +
    "<span>````nNNNNn```````````````nNNNN.``````nNNNNn.````(NNNNS.`````.SNNNn``````.SNNN(``````.SNNNN,```.NN(```````</span><br>" +
    "<span>````nNNNNn```````````````nNNNN.``````nNNNN.``````ONNNS.`````.SNNNn``````.SNNN(````````ONNNNN.(NS.````````</span><br>" +
    "<span>````nNNNNn```````````````nNNNN.``````nNNNN.``````ONNNS.`````.SNNNn``````.SNNN(``````````nNNNNN,``````````</span><br>" +
    "<span>````nNNNNn````````...````nNNNN.``````nNNNN.``````ONNNS.`````.SNNNn``````.SNNN(``````````(NNNNNN(`````````</span><br>" +
    "<span>````nNNNNn```````.SNS.```nNNNN.``````nNNNN.``````ONNNS.`````.SNNN(``````.SNNN(````````(NNO``(NNNNO```````</span><br>" +
    "<span>````nNNNNn```````nNNS.```nNNNN.``````nNNNN.``````ONNNS.``````(NNNNNSnn(SNNNNN(``````nNNn`````.SNNNN.`````</span><br>" +
    "<span>`(NNNNNNNNNNNNNNNNNNS.,MNNNNNNNNS..MNNNNNNNNn``(NNNNNNNNS.`````(MMMMNn``.NMMMMM@,ONNNNNNS.``,MMMMMMMMS.``</span><br>";

  logoParent.appendChild(logo);
  return logoParent;
}

export function vscodeFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo vscode-logo";
  logo.innerHTML =
    "<span>`````````````````````````````````````````````````````````````````````.+SNNNS+.``````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````-ISSSSSNNNNNS+.``````````````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````-SSSSSSSSSNNNNNNNNS+.``````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````-SSSSSSSSSSSNNNNNNNNNNNNS+.``````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````+SSSSSSSSSSSSSNNNNNNNNNNNNNNNNS+.``````</span><br>" +
    "<span>``````````````````````````````````````````````````````````.+SSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNN+.``</span><br>" +
    "<span>````````````````````````````````````````````````````````.ISSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNS`</span><br>" +
    "<span>``````````````````````````````````````````````````````.ISSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNS</span><br>" +
    "<span>````````````````````````````````````````````````````-ISSSSSSSSSSSSSSSSSSSSSNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````````````````````````````````````````-ISSSSSSSSSSSSSSSSSSSSSSINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>````````````````````````````````````````````````-ISSSSSSSSSSSSSSSSSSSSSSSSINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````````````````````````````````````+ISSSSSSSSSSSSSSSSSSSSSSSSSIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````-+I+-```````````````````````````````.+ISSSSSSSSSSSSSSSSSSSSSSSSSSSIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````+SSSSSSSI.``````````````````````````.+SSSSSSSSSSSSSSSSSSSSSSSSSSSSSIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```+SSSSSSSSSSSS+``````````````````````.+SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSII-`NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`+SSSSSSSSSSSSSSSSI-`````````````````.ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSI+.```NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSS+.````````````-ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSII-``````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSSSSI-````````-ISSSSSSSSSSSSSSSSSSSSSSSSSSSSII-.````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`+SSSSSSSSSSSSSSSSSSSSSSSS+.```-IIIIIISSSSSSSSSSSSSSSSSSSSSSSI+.```````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```+SSSSSSSSSSSSSSSSSSSSSSSSI+IIIIIIIIIIIIIIIIIIIIIIIIIIIIII-``````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````-SSSSSSSSSSSSSSSSSSSSSSSSSSIIIIIIIIIIIIIIIIIIIIIIIII+.````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````-SSSSSSSSSSSSSSSSSSSSSSSSSSSIIIIIIIIIIIIIIIIIIII-```````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````````-ISSSSSSSSSSSSSSSSSSSSSSSSSSIIIIIIIIIIIIIII-.`````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````````.ISSSSSSSSSSSSSSSSSSSSSSSSSSSIIIIIIIII+.````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````````````.ISSSSSSSSSSSSSSSSSSSSSSSSSSSIIIII-```````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````````````.SSSSSSSSSSSSSSSSSSSSSSSSSSSSS+`````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````-IIIISSSSSSSSSSSSSSSSSSSSSSSSSSSS+```````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````````.+IIIIIIIISSSSSSSSSSSSSSSSSSSSSSSSSSSSI-````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````````.+IIIIIIIIIIIISSSSSSSSSSSSSSSSSSSSSSSSSSSSS+.`````````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````.+IIIIIIIIIIIIII+ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSI-```````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````-+IIIIIIIIIIIIIIIII++ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSS+.````````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```-IIIIIIIIIIIIIIIIIIIIII++++SSSSSSSSSSSSSSSSSSSSSSSSSSSSSI-``````````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`-IIIIIIIIIIIIIIIIIIIIIII+-````+SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSI.```````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>+IIIIIIIIIIIIIIIIIIIIII+.````````-ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSI+.````````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>+IIIIIIIIIIIIIIIIIII+-`````````````-ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSI-``````NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`-+IIIIIIIIIIIIIII+.`````````````````.ISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSI+.```NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```-+IIIIIIIIII+-``````````````````````.+SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSI+-`NNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>`````.+IIIII+-.``````````````````````````.+ISSSSSSSSSSSSSSSSSSSSSSSSSSSIIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>```````.---.````````````````````````````````+ISSSSSSSSSSSSSSSSSSSSSSSSIIIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````````````````````````````````````-ISSSSSSSSSSSSSSSSSSSSSIIIIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>````````````````````````````````````````````````-ISSSSSSSSSSSSSSSSSSSIIIIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````````````````````````````````````````-IISSSSSSSSSSSSSSSSIIIIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>````````````````````````````````````````````````````.IISSSSSSSSSSSSSSIIIIIINNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````````````````````````````````````````````.+IIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNNNNNI</span><br>" +
    "<span>````````````````````````````````````````````````````````.+IIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNNNNI`</span><br>" +
    "<span>```````````````````````````````````````````````````````````+IIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNI+.``</span><br>" +
    "<span>`````````````````````````````````````````````````````````````-IIIIIIIIIIIIINNNNNNNNNNNNNNNNI-.``````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````-IIIIIIIIIIINNNNNNNNNNNNI-.``````````</span><br>" +
    "<span>`````````````````````````````````````````````````````````````````.IIIIIIIIINNNNNNNNI-.``````````````</span><br>" +
    "<span>```````````````````````````````````````````````````````````````````.+IIIIISNNNSI-```````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````````````````````````-+ISSI-```````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}
