const gutsButton = document.querySelector("#guts-layout-button");
const logoButton = document.querySelector("#logo-layout-button");
const grifoButton = document.querySelector("#griffith-layout-button");
const styleElement = document.querySelector("#estilios");
const video = document.querySelector("#video");
const descricao = document.querySelector("#descricao");
const persona = document.querySelector("#persona");


const temaGuts = document.getElementById("tema-guts");
const temaEclipse = document.getElementById("tema-eclipse");
const temaGrifo = document.getElementById("tema-grifo");
temaGuts.volume = 0.4;


grifoButton.addEventListener("click", function () {
    temaGrifo.muted = false;
    temaGuts.muted = true;
    temaEclipse.muted = true;
    temaGrifo.currentTime = 0;
    temaGrifo.play();

    video.setAttribute("src", "./src/femto/video/God-Hand.mp4");
    persona.setAttribute("src", "https://pnganime.com/web/images/f/femto-berserk.png");
    descricao.innerHTML = `
    Inicialmente conhecido como Griffith, Femto passa por uma
    transformação horrível durante o evento traumático conhecido como o Eclipse. Ele se torna um dos God
    Hand, uma poderosa entidade demoníaca que lidera os Apóstolos, seres corrompidos pelo mal. Femto é a
    encarnação demoníaca de Griffith após sacrificar seus companheiros e tornar-se um ser demoníaco em
    busca de poder. Ele é caracterizado por sua aparência sinistra, asas negras e um olho vermelho
    sinistro. Femto desempenha um papel central na trama de "Berserk", sendo um dos principais
    antagonistas e uma figura icônica no mundo sombrio e brutal criado pela obra. Seu retorno marca um
    momento crucial na jornada de vingança do protagonista Guts e na complexa narrativa de "Berserk".
    `;
    styleElement.innerHTML = `
    .fundo-video::after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.66) 0%, rgba(178, 0, 0, 0.363) 50%, rgba(0, 0, 0, 0.66) 100%);
    }
    `;
});

gutsButton.addEventListener("click", function () {
    temaGrifo.muted = true;
    temaGuts.muted = false;
    temaEclipse.muted = true;
    temaGuts.currentTime = 0;
    temaGuts.play();

    video.setAttribute("src", "//rare-gallery.com/livewalls/imgpreview/98024-Anime-Warrior-Armor-Berserk-Guts-Berserk.mp4");
    persona.setAttribute("src", "./src/guts/fotos/pngegg.png");
    descricao.innerHTML = `
    Guts é o protagonista do manga e anime "Berserk". Após sobreviver ao
	traumático evento conhecido como o Eclipse, onde foi traído por seus companheiros e ferido
	gravemente, ele se torna um caçador de demônios em busca de vingança contra Griffith, um antigo
	aliado que se tornou um ser demoníaco. Guts é conhecido por sua incrível habilidade com a espada e
	sua determinação implacável em enfrentar as forças sobrenaturais que ameaçam o mundo, enquanto lida
	com as cicatrizes físicas e emocionais deixadas pelo passado.
    `;
    styleElement.innerHTML = `
    .fundo-video::after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(0deg, rgba(255, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)
    }
    `;
});

logoButton.addEventListener("click", function () {
    temaGrifo.muted = true;
    temaGuts.muted = true;
    temaEclipse.muted = false;
    temaEclipse.currentTime = 0;
    temaEclipse.play();

    video.setAttribute("src", "./src/eclipse/video/download.mp4");
    persona.setAttribute("src", "./src/eclipse/imagem/pngaaa.com-7189218.png");
    descricao.innerHTML = `
    O eclipse em "Berserk" é um evento traumático e decisivo que ocorre
	durante o Arco dos Elfos Negros. Enquanto busca resgatar sua amada Casca, Guts e seus aliados são
	transportados para uma dimensão distorcida. Neste lugar sombrio, são confrontados pelos God Hand, os
	líderes demoníacos dos Apóstolos. Uma traição brutal se desenrola, resultando em um horrível ritual
	de
	sacrifício. Os Apóstolos massacram e devoram os membros do grupo, incluindo Casca, para que Femto, a
	encarnação demoníaca de Griffith, possa nascer. Guts é forçado a testemunhar a violência hedionda,
	deixando cicatrizes profundas. Este evento marca uma virada na vida de Guts, impulsionando sua
	jornada
	de vingança contra os Apóstolos e sua busca por justiça contra Griffith.
    `;
    styleElement.innerHTML = `
    .fundo-video::after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, rgb(255 0 0 / 0%) 75%, rgb(0, 0, 0) 100%)
    }
    `;
});