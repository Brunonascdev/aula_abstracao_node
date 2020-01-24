// Encomenda para sistema de frete
class Encomenda{
    constructor(){
        this.id = 0;
        this.remetenteNomeCompleto = '';
        this.remetenteCPF = '';
        this.remetenteCNPJ = '';
        this.remetenteEndereco = '';
        this.remetenteCEP = '';
        this.remetenteEstado = '';
        this.destinatarioNomeCompleto = '';
        this.destinatarioCPF = '';
        this.destinatarioCNPJ = '';
        this.destinatarioEndereco = '';
        this.destinatarioCEP = '';
        this.destinatarioEstado = '';
        this.transportadora = '';
        this.valor = 0;
        this.peso = 0;
        this.tamanhoCaixa = [];
        this.concluida = false;
    }

    AlterarInfoDestinatario(){

    }

    AlterarInfoRemetente(){

    }

    AlterarTransportadora(){

    }

    AlterarPeso(){

    }

    AlterarTamanhoCaixa(){

    }

    ConcluirEntrega(){
        
    }

}
