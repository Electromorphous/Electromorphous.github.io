export function htmlFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo html-logo";
  logo.innerHTML =
    "<span>`NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN`</span><br>" +
    "<span>`oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo`</span><br>" +
    "<span>`/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`</span><br>" +
    "<span>`:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN:`</span><br>" +
    "<span>`-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-`</span><br>" +
    "<span>``NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNNN``</span><br>" +
    "<span>``NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNNN``</span><br>" +
    "<span>``oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNNo``</span><br>" +
    "<span>``/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNN/``</span><br>" +
    "<span>``:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNN:``</span><br>" +
    "<span>``.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNN.``</span><br>" +
    "<span>```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooooNNNNNNNNNN```</span><br>" +
    "<span>```NNNNNNNNNNNNNNNNNNNNNNo////////////////////////////::::::::::::::::::::::::::::/ooooooooooooNNNNNNNNNN```</span><br>" +
    "<span>```oNNNNNNNNNNNNNNNNNNNNN/````````````````````````````````````````````````````````-ooooooooooooNNNNNNNNNo```</span><br>" +
    "<span>```/NNNNNNNNNNNNNNNNNNNNNo````````````````````````````````````````````````````````:ooooooooooooNNNNNNNNN/```</span><br>" +
    "<span>```-NNNNNNNNNNNNNNNNNNNNNN````````````````````````````````````````````````````````:ooooooooooooNNNNNNNNN-```</span><br>" +
    "<span>```.NNNNNNNNNNNNNNNNNNNNNN````````````````````````````````````````````````````````/oooooooooooNNNNNNNNNN.```</span><br>" +
    "<span>````NNNNNNNNNNNNNNNNNNNNNN.```````````````````````````````````````````````````````ooooooooooooNNNNNNNNNN````</span><br>" +
    "<span>````NNNNNNNNNNNNNNNNNNNNNN-````````````...............```````````````````````````.ooooooooooooNNNNNNNNNN````</span><br>" +
    "<span>````/NNNNNNNNNNNNNNNNNNNNN-```````````.NNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooNNNNNNNNN/````</span><br>" +
    "<span>````:NNNNNNNNNNNNNNNNNNNNN:```````````.NNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooNNNNNNNNN:````</span><br>" +
    "<span>````-NNNNNNNNNNNNNNNNNNNNN/````````````NNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooNNNNNNNNN-````</span><br>" +
    "<span>````.NNNNNNNNNNNNNNNNNNNNNo````````````oNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooNNNNNNNNNN.````</span><br>" +
    "<span>`````NNNNNNNNNNNNNNNNNNNNNo````````````/NNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooNNNNNNNNNN`````</span><br>" +
    "<span>`````oNNNNNNNNNNNNNNNNNNNNN````````````:NNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooNNNNNNNNNo`````</span><br>" +
    "<span>`````/NNNNNNNNNNNNNNNNNNNNN````````````.--------------..........................-ooooooooooooNNNNNNNNN/`````</span><br>" +
    "<span>`````:NNNNNNNNNNNNNNNNNNNNN.````````````````````````````````````````````````````.ooooooooooooNNNNNNNNN:`````</span><br>" +
    "<span>`````-NNNNNNNNNNNNNNNNNNNNN-````````````````````````````````````````````````````-ooooooooooooNNNNNNNNN-`````</span><br>" +
    "<span>``````NNNNNNNNNNNNNNNNNNNNN:````````````````````````````````````````````````````-oooooooooooNNNNNNNNNN``````</span><br>" +
    "<span>``````NNNNNNNNNNNNNNNNNNNNN:````````````````````````````````````````````````````:oooooooooooNNNNNNNNNN``````</span><br>" +
    "<span>``````oNNNNNNNNNNNNNNNNNNNN/````````````````````````````````````````````````````/oooooooooooNNNNNNNNNo``````</span><br>" +
    "<span>``````/NNNNNNNNNNNNNNNNNNNNo::::::::::::::::::::::::::-------------.````````````ooooooooooooNNNNNNNNN/``````</span><br>" +
    "<span>``````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooo:````````````ooooooooooooNNNNNNNNN:``````</span><br>" +
    "<span>``````.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooo-````````````ooooooooooooNNNNNNNNN.``````</span><br>" +
    "<span>```````NNNNNNNNNNNNNNNNNNNNNooooooooooooNNNNNNNNNNNNNNooooooooooooo.```````````.oooooooooooNNNNNNNNNN```````</span><br>" +
    "<span>```````NNNNNNNNNNNNNNNNNNNNN.```````````-NNNNNNNNNNNNNooooooooooooo.```````````.oooooooooooNNNNNNNNNN```````</span><br>" +
    "<span>```````oNNNNNNNNNNNNNNNNNNNN-```````````.NNNNNNNNNNNNNooooooooooooo````````````-oooooooooooNNNNNNNNNo```````</span><br>" +
    "<span>```````/NNNNNNNNNNNNNNNNNNNN:````````````NNNNNNNNNNNNNooooooooooooo````````````:oooooooooooNNNNNNNNN/```````</span><br>" +
    "<span>```````-NNNNNNNNNNNNNNNNNNNN/````````````/NNNNNNNNNNNNooooooooooo/:````````````/oooooooooooNNNNNNNNN-```````</span><br>" +
    "<span>```````.NNNNNNNNNNNNNNNNNNNNo``````````````.-:/oNNNNNNoooooo/:-.```````````````/oooooooooooNNNNNNNNN.```````</span><br>" +
    "<span>````````NNNNNNNNNNNNNNNNNNNNN```````````````````..-:/o/:-.`````````````````````oooooooooooNNNNNNNNNN````````</span><br>" +
    "<span>````````NNNNNNNNNNNNNNNNNNNNN``````````````````````````````````````````````````oooooooooooNNNNNNNNNN````````</span><br>" +
    "<span>````````/NNNNNNNNNNNNNNNNNNNN.````````````````````````````````````````````````.oooooooooooNNNNNNNNN/````````</span><br>" +
    "<span>````````:NNNNNNNNNNNNNNNNNNNN/--.```````````````````````````````````````````..:oooooooooooNNNNNNNNN:````````</span><br>" +
    "<span>````````-NNNNNNNNNNNNNNNNNNNNNNNNo/:-..```````````````````````````````..-:/oooooooooooooooNNNNNNNNN-````````</span><br>" +
    "<span>````````.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-..```````````````````..-:/oooooooooooooooooooooNNNNNNNNN.````````</span><br>" +
    "<span>`````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-..````````.-:/ooooooooooooooooooooooooooNNNNNNNNNN`````````</span><br>" +
    "<span>`````````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-:/ooooooooooooooooooooooooooooooooNNNNNNNNNo`````````</span><br>" +
    "<span>`````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooNNNNNNNNN/`````````</span><br>" +
    "<span>`````````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooNNNNNNNNN:`````````</span><br>" +
    "<span>`````````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooNNNNNNNNNNNNNN-`````````</span><br>" +
    "<span>``````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooNNNNNNNNNNNNNNNNNNNNN``````````</span><br>" +
    "<span>``````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooNNNNNNNNNNNNNNNNNNNNNNNNNNNN``````````</span><br>" +
    "<span>``````````/oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````````</span><br>" +
    "<span>`````````````.-:/ooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-.`````````````</span><br>" +
    "<span>````````````````````.-:/oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-.````````````````````</span><br>" +
    "<span>``````````````````````````..-:/oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-..``````````````````````````</span><br>" +
    "<span>`````````````````````````````````..-:/oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo/:-..`````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````..-:/oNNNNNNNNNNNNNNNNo/:-..````````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````````..-:/oNNo/:--.```````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function cssFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo css-logo";
  logo.innerHTML =
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo</span><br>" +
    "<span>oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo</span><br>" +
    "<span>:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN:</span><br>" +
    "<span>-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-</span><br>" +
    "<span>.oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooooooNNNNNNNNo.</span><br>" +
    "<span>'oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooooooNNNNNNNNo'</span><br>" +
    "<span>'oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNNo'</span><br>" +
    "<span>`oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNNo`</span><br>" +
    "<span>`:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNN:`</span><br>" +
    "<span>`.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNN.`</span><br>" +
    "<span>`'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooooooooooooooooNNNNNNNNN'`</span><br>" +
    "<span>``NNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooooo////////////////////////////ooooooooooooooNNNNNNNNN``</span><br>" +
    "<span>``oNNNNNNNNNNNNNNNNNNNNN:''''''''''''''''''''''''''''````````````````````````````/ooooooooooooNNNNNNNNNo``</span><br>" +
    "<span>``/NNNNNNNNNNNNNNNNNNNNN/''''''''''''''''''''''''''''````````````````````````````oooooooooooooNNNNNNNNN/``</span><br>" +
    "<span>``:NNNNNNNNNNNNNNNNNNNNNo''''''''''''''''''''''''''''```````````````````````````'oooooooooooooNNNNNNNNN:``</span><br>" +
    "<span>``-NNNNNNNNNNNNNNNNNNNNNo''''''''''''''''''''''''''''```````````````````````````'oooooooooooooNNNNNNNNN-``</span><br>" +
    "<span>``.oNNNNNNNNNNNNNNNNNNNNo.'''''''''''''''''''''''''''```````````````````````````.oooooooooooooNNNNNNNNo.``</span><br>" +
    "<span>``'oNNNNNNNNNNNNNNNNNNNNo-...........................'''''''''''''''````````````-ooooooooooooNNNNNNNNNo'``</span><br>" +
    "<span>```oNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooooooooo'```````````-ooooooooooooNNNNNNNNNo```</span><br>" +
    "<span>```/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooo'```````````:ooooooooooooNNNNNNNNN/```</span><br>" +
    "<span>```-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooo````````````/ooooooooooooNNNNNNNNN-```</span><br>" +
    "<span>```'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooo````````````oooooooooooooNNNNNNNNN'```</span><br>" +
    "<span>````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooo/````````````oooooooooooooNNNNNNNNN````</span><br>" +
    "<span>````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooo:````````````ooooooooooooNNNNNNNNNo````</span><br>" +
    "<span>````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo--------------..............'```````````'ooooooooooooNNNNNNNNNo````</span><br>" +
    "<span>````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo''''''''''''''``````````````````````````.ooooooooooooNNNNNNNNN:````</span><br>" +
    "<span>````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo''''''''''''''``````````````````````````-ooooooooooooNNNNNNNNN-````</span><br>" +
    "<span>````.oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo.'''''''''''''``````````````````````````:ooooooooooooNNNNNNNNo.````</span><br>" +
    "<span>````'oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo.'''''''''''''``````````````````````````/ooooooooooooNNNNNNNNo'````</span><br>" +
    "<span>`````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNo-'''''''''''''``````````````````````````ooooooooooooNNNNNNNNNo`````</span><br>" +
    "<span>`````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/:::::::::::::-------------.```````````'ooooooooooooNNNNNNNNN/`````</span><br>" +
    "<span>`````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooo/```````````'ooooooooooooNNNNNNNNN:`````</span><br>" +
    "<span>`````.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooo:```````````.ooooooooooooNNNNNNNNN.`````</span><br>" +
    "<span>`````'NNNNNNNNNNNNNNNNNNNNNoooooooooooooNNNNNNNNNNNNNooooooooooooo-```````````.ooooooooooooNNNNNNNNN'`````</span><br>" +
    "<span>``````oNNNNNNNNNNNNNNNNNNNN/'''''''''''.NNNNNNNNNNNNNooooooooooooo'```````````-ooooooooooooNNNNNNNNo``````</span><br>" +
    "<span>``````oNNNNNNNNNNNNNNNNNNNN/''''''''''''NNNNNNNNNNNNNooooooooooooo'```````````:oooooooooooNNNNNNNNNo``````</span><br>" +
    "<span>``````/NNNNNNNNNNNNNNNNNNNNo''''''''''''oNNNNNNNNNNNNooooooooooooo````````````:oooooooooooNNNNNNNNN/``````</span><br>" +
    "<span>``````:NNNNNNNNNNNNNNNNNNNNo''''''''''''ooNNNNNNNNNNNoooooooooooo/````````````/oooooooooooNNNNNNNNN:``````</span><br>" +
    "<span>``````-NNNNNNNNNNNNNNNNNNNNo'''''''''''''..-/oooNNNNNooooooo/:.''`````````````ooooooooooooNNNNNNNNN-``````</span><br>" +
    "<span>``````.oNNNNNNNNNNNNNNNNNNNN'''''''''''''''''''..-/ooo/:..'```````````````````ooooooooooooNNNNNNNNo.``````</span><br>" +
    "<span>``````'oNNNNNNNNNNNNNNNNNNNN''''''''''''''''''''''''''````````````````````````ooooooooooooNNNNNNNNo'``````</span><br>" +
    "<span>```````oNNNNNNNNNNNNNNNNNNNN.''''''''''''''''''''''''````````````````````````'oooooooooooNNNNNNNNNo```````</span><br>" +
    "<span>```````/NNNNNNNNNNNNNNNNNNNNo:-.'''''''''''''''''''''`````````````````````'.-/oooooooooooNNNNNNNNN/```````</span><br>" +
    "<span>```````-NNNNNNNNNNNNNNNNNNNNNNNooo/:-.'''''''''''''''```````````````'.-:/ooooooooooooooooNNNNNNNNN-```````</span><br>" +
    "<span>```````'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNooo/:-.'''''''''`````````'.-:/ooooooooooooooooooooooNNNNNNNNN'```````</span><br>" +
    "<span>````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooo/:-.'''```'.-:/ooooooooooooooooooooooooooooNNNNNNNNN````````</span><br>" +
    "<span>````````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooo/:/ooooooooooooooooooooooooooooooooooNNNNNNNNo````````</span><br>" +
    "<span>````````oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooNNNNNNNNNo````````</span><br>" +
    "<span>````````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooooNNNNNNNNN:````````</span><br>" +
    "<span>````````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooooooooooooooooNNNNNNNNNNN-````````</span><br>" +
    "<span>````````.oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooooooooooooooooNNNNNNNNNNNNNNNNNo.````````</span><br>" +
    "<span>````````'oNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooooooooooooooooNNNNNNNNNNNNNNNNNNNNNNNNo'````````</span><br>" +
    "<span>`````````/ooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooooooooooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoo/`````````</span><br>" +
    "<span>``````````''.-/ooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooo/-.''``````````</span><br>" +
    "<span>`````````````````'..:/ooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNoooo/:..'`````````````````</span><br>" +
    "<span>````````````````````````'.-:/ooooNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNooo/:-.'````````````````````````</span><br>" +
    "<span>```````````````````````````````'.-:/oooNNNNNNNNNNNNNNNNNNNNNNNNNNNNooo/:-.'```````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````'.-:/oooNNNNNNNNNNNNNNooo/:-.'``````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````````'.-:/oooooo/:-.'`````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````''````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

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

export function npmFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo npm-logo";
  logo.innerHTML =
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````````````````````:NNNNNNNN`````````````````````````````````+NNNNNNN+`````````````````````````````````````````````````:NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````````````````````-NNNNNNNN`````````````````````````````````/NNNNNNN/`````````````````````````````````````````````````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````````````````````-NNNNNNNN`````````````````````````````````/NNNNNNN/`````````````````````````````````````````````````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````````````````````-NNNNNNNN`````````````````````````````````/NNNNNNN/`````````````````````````````````````````````````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````++++++++.```````-NNNNNNNN````````````````.++++++++````````/NNNNNNN/````````````````:+++++++:````````++++++++.```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````-NNNNNNNN````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN````````````````.////////````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN`````````````````````````````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN`````````````````````````````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN-````````````````NNNNNNNN-```````-NNNNNNNN`````````````````````````````````/NNNNNNN/````````````````/NNNNNNN/````````NNNNNNNN-```````-NNNNNNNN</span><br>" +
    "<span>NNNNNNNN:................NNNNNNNN:.......:NNNNNNNN`````````````````................+NNNNNNN+................+NNNNNNN+........NNNNNNNN:.......:NNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````````````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````````````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````````````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN````````````````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>``````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````````````````````````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN```````````````````````````````````````````````````````````````````````````</span><br>";
  logoParent.appendChild(logo);
  return logoParent;
}

export function gitFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo git-logo";
  logo.innerHTML =
    "<span>`````````````````````````````````````````````````````.---.`````````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````-/+NNNNN+/-``````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````-+NNNNNNNNNNN+-````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````-/NNNNNNNNNNNNNNN+-``````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````-/NNNNNNNNNNNNNNNNNNN+-````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````-/NNNNNNNNNNNNNNNNNNNNNNN+.``````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNN+.````````````````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNN/.``````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````````````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNN/.````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````./.````````-/NNNNNNNNNNNNNNNNNNNNNNNNNNNN/.``````````````````````````````````</span><br>" +
    "<span>````````````````````````````````./NNN/.````````-/NNNNNNNNNNNNNNNNNNNNNNNNNNNN/.````````````````````````````````</span><br>" +
    "<span>``````````````````````````````./NNNNNNN/.````````-/NNNNNNNNNNNNNNNNNNNNNNNNNNNN/.``````````````````````````````</span><br>" +
    "<span>````````````````````````````./NNNNNNNNNNN/.````````-+N++++NNNNNNNNNNNNNNNNNNNNNNN/.````````````````````````````</span><br>" +
    "<span>``````````````````````````./NNNNNNNNNNNNNNN/.````````.````.-/+NNNNNNNNNNNNNNNNNNNNN/.``````````````````````````</span><br>" +
    "<span>````````````````````````./NNNNNNNNNNNNNNNNNNN/.```````````````:NNNNNNNNNNNNNNNNNNNNNN/.````````````````````````</span><br>" +
    "<span>``````````````````````.:NNNNNNNNNNNNNNNNNNNNNNN:```````````````-NNNNNNNNNNNNNNNNNNNNNNN/.``````````````````````</span><br>" +
    "<span>````````````````````.:NNNNNNNNNNNNNNNNNNNNNNNNN:````````````````+NNNNNNNNNNNNNNNNNNNNNNNN/.````````````````````</span><br>" +
    "<span>``````````````````.:NNNNNNNNNNNNNNNNNNNNNNNNNNN-````````````````/NNNNNNNNNNNNNNNNNNNNNNNNNN/```````````````````</span><br>" +
    "<span>`````````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNN/````````````````+NNNNNNNNNNNNNNNNNNNNNNNNNNN+/`````````````````</span><br>" +
    "<span>```````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/````````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNN+:```````````````</span><br>" +
    "<span>`````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+-````````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNN+:`````````````</span><br>" +
    "<span>```````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+:````````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNN+:```````````</span><br>" +
    "<span>`````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-+:`````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNN+:`````````</span><br>" +
    "<span>```````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NN+:`````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNN+:```````</span><br>" +
    "<span>`````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNN+:`````````:+////+NNNNNNNNNNNNNNNNNNNNNN+:`````</span><br>" +
    "<span>```:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNN+:```````````````-/NNNNNNNNNNNNNNNNNNNNN+:```</span><br>" +
    "<span>`-+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNN+:```````````````.+NNNNNNNNNNNNNNNNNNNNN+-`</span><br>" +
    "<span>.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNN/```````````````.NNNNNNNNNNNNNNNNNNNNNNN-</span><br>" +
    "<span>-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNN:````````````````/NNNNNNNNNNNNNNNNNNNNNN/</span><br>" +
    "<span>`:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNN+```````````````.NNNNNNNNNNNNNNNNNNNNNN/`</span><br>" +
    "<span>```/NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNNN+.````````````-+NNNNNNNNNNNNNNNNNNNN+-``</span><br>" +
    "<span>````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNNNNN/-```````.:+NNNNNNNNNNNNNNNNNNNN+-````</span><br>" +
    "<span>``````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNNNNNNNN++//++NNNNNNNNNNNNNNNNNNNNN+-``````</span><br>" +
    "<span>````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+-````````</span><br>" +
    "<span>``````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/``````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+:``````````</span><br>" +
    "<span>````````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+-``````.+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+:````````````</span><br>" +
    "<span>``````````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/.``````````-+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+:``````````````</span><br>" +
    "<span>````````````````./NNNNNNNNNNNNNNNNNNNNNNNNNNNNNN:``````````````/NNNNNNNNNNNNNNNNNNNNNNNNNNNNN+:````````````````</span><br>" +
    "<span>``````````````````-/NNNNNNNNNNNNNNNNNNNNNNNNNNN/````````````````+NNNNNNNNNNNNNNNNNNNNNNNNNN+:``````````````````</span><br>" +
    "<span>````````````````````-/NNNNNNNNNNNNNNNNNNNNNNNNN-````````````````/NNNNNNNNNNNNNNNNNNNNNNNN+:````````````````````</span><br>" +
    "<span>``````````````````````-/NNNNNNNNNNNNNNNNNNNNNNN/````````````````+NNNNNNNNNNNNNNNNNNNNNN+:``````````````````````</span><br>" +
    "<span>````````````````````````-+NNNNNNNNNNNNNNNNNNNNNN-``````````````:NNNNNNNNNNNNNNNNNNNNN+:````````````````````````</span><br>" +
    "<span>``````````````````````````-+NNNNNNNNNNNNNNNNNNNNN:```````````./NNNNNNNNNNNNNNNNNNNN+:``````````````````````````</span><br>" +
    "<span>````````````````````````````-+NNNNNNNNNNNNNNNNNNNN+/-.```..:/NNNNNNNNNNNNNNNNNNNN+:````````````````````````````</span><br>" +
    "<span>``````````````````````````````-+NNNNNNNNNNNNNNNNNNNNNNN++NNNNNNNNNNNNNNNNNNNNNN+/``````````````````````````````</span><br>" +
    "<span>````````````````````````````````-+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN+/.```````````````````````````````</span><br>" +
    "<span>``````````````````````````````````-+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/.`````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````-+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/.```````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/.`````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````:+NNNNNNNNNNNNNNNNNNNNNNNNNNNN/.```````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````:+NNNNNNNNNNNNNNNNNNNNNNNN/.`````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````:+NNNNNNNNNNNNNNNNNNNN/.```````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````:+NNNNNNNNNNNNNNNN/.`````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````:+NNNNNNNNNNNN/.```````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````:+NNNNNNNN/.`````````````````````````````````````````````````</span><br>" +
    "<span>````````````````````````````````````````````````````.:://:-````````````````````````````````````````````````````</span><br>";
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

export function pythonFunction() {
  const logoParent = document.createElement("div");
  logoParent.className = "logo-parent";
  const logo = document.createElement("div");
  logo.className = "logo python-logo";
  logo.innerHTML =
    "<span>````````````````````````````````````..-:::SSSSSSSSSSSSSSS::--..`````````````````````````````````````</span><br>" +
    "<span>```````````````````````````````.-SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:-.````````````````````````````````</span><br>" +
    "<span>````````````````````````````.:SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:.`````````````````````````````</span><br>" +
    "<span>```````````````````````````:SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:.```````````````````````````</span><br>" +
    "<span>``````````````````````````:SSSSSS-`````-SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS-``````````````````````````</span><br>" +
    "<span>``````````````````````````SSSSSS.```````-SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS``````````````````````````</span><br>" +
    "<span>``````````````````````````SSSSSS````````.SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.`````````````````````````</span><br>" +
    "<span>``````````````````````````SSSSSSS.`````.SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.`````````````````````````</span><br>" +
    "<span>``````````````````````````SSSSSSSSS:-:SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.`````````````````````````</span><br>" +
    "<span>``````````````````````````SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.`````````````````````````</span><br>" +
    "<span>``````````````````````````SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.`````````````````````````</span><br>" +
    "<span>``````````````````````````-----------------.......:SSSSSSSSSSSSSSSSSSSSSSS.`````````````````````````</span><br>" +
    "<span>``````````````````````````````````````````````````:SSSSSSSSSSSSSSSSSSSSSSS.```...........```````````</span><br>" +
    "<span>``````````.--:::::::::::::::::::::::::::::::::::::SSSSSSSSSSSSSSSSSSSSSSSS.``:NNNNNNNNNNhyNS.```````</span><br>" +
    "<span>```````.:SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.``SNNNNNNNNNNNNNNNN-`````</span><br>" +
    "<span>`````-SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.``SNNNNNNNNNNNNNNNNNS````</span><br>" +
    "<span>````:SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.``SNNNNNNNNNNNNNNNNNNy```</span><br>" +
    "<span>```SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.``SNNNNNNNNNNNNNNNNNNNy``</span><br>" +
    "<span>``SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS.``SNNNNNNNNNNNNNNNNNNNNS`</span><br>" +
    "<span>`-SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:```SNNNNNNNNNNNNNNNNNNNNN.</span><br>" +
    "<span>`SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS-```NNNNNNNNNNNNNNNNNNNNNNS</span><br>" +
    "<span>-SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:-```-NNNNNNNNNNNNNNNNNNNNNNh</span><br>" +
    "<span>:SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS::.````hNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS:::-.````.hNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS::::---------------------------..``````.SNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSSSSSSSSS:-.`````````````````````````````````````.:SyNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSSSSSSS:``````-SSNyyhhhhhhhhhhhhhhhhhhhhhhhhhhhNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>SSSSSSSSSSSSSSSSSSSSSSSSS.````:NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>:SSSSSSSSSSSSSSSSSSSSSSS````:hNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN</span><br>" +
    "<span>-SSSSSSSSSSSSSSSSSSSSSS-```SNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh</span><br>" +
    "<span>`SSSSSSSSSSSSSSSSSSSSSS```SNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNS</span><br>" +
    "<span>`:SSSSSSSSSSSSSSSSSSSS:```hNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh`</span><br>" +
    "<span>``SSSSSSSSSSSSSSSSSSSS:```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-`</span><br>" +
    "<span>``.SSSSSSSSSSSSSSSSSSS:```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNS``</span><br>" +
    "<span>```.SSSSSSSSSSSSSSSSSS:```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh:```</span><br>" +
    "<span>`````:SSSSSSSSSSSSSSSS:```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNhS.````</span><br>" +
    "<span>``````.:SSSSSSSSSSSSSS:```NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNhyS.``````</span><br>" +
    "<span>`````````.-:::::::::::-```NNNNNNNNNNNNNNNNNNNNNNNNyNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNS/-.`````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNN``````````````````````````````````````````````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSSSSSSSSSSS-`````````````````````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`````````````````````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/`````````````````````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNhNSSNhNNNNNNN/`````````````````````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNS``````SNNNNNN/`````````````````````````</span><br>" +
    "<span>``````````````````````````NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNy````````yNNNNN/`````````````````````````</span><br>" +
    "<span>``````````````````````````hNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh```````.hNNNNN/`````````````````````````</span><br>" +
    "<span>``````````````````````````-NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh/.``./hNNNNNN.`````````````````````````</span><br>" +
    "<span>```````````````````````````.NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNh-``````````````````````````</span><br>" +
    "<span>`````````````````````````````-SNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNy/````````````````````````````</span><br>" +
    "<span>````````````````````````````````-SNhNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNyS/.``````````````````````````````</span><br>" +
    "<span>`````````````````````````````````````-:/SSNyyhhddddddddhhyNNSS/-.```````````````````````````````````</span><br>";
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
