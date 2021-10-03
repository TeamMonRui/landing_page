(function(){
    'use strict'
    const c_f = document.getElementById('contact-form')
    const d_s = {}

    c_f.addEventListener('submit', function(e){
        e.preventDefault()
        get_data_from_form()
    })

    const get_data_from_form = function(){
        d_s.n = document.getElementById('name').value
        d_s.e = document.getElementById('email').value
        d_s.p = document.getElementById('phone').value
        d_s.c = document.getElementById('comment').value

        validate_data_to_send()
    }

    const validate_data_to_send = function(){
        const name_regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        const email_regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        const phone_regex = /^[0-9]{10}$/
        let v_a = []

        for(let item in d_s){
            switch(item){
                case 'n':
                    v_a.push({
                        f: 'Nombre Completo',
                        v: name_regex.test(d_s.n)
                    })
                    break;
                case 'e':
                    v_a.push({
                        f: 'Email',
                        v: email_regex.test(d_s.e)
                    })
                    break;
                case 'p':
                    v_a.push({
                        f: 'Teléfono',
                        v: phone_regex.test(d_s.p)
                    })
                    break;
                case 'c':
                    v_a.push({
                        f: 'Comentario',
                        v: d_s.c == '' ? false: true
                    })
                    break;
            }
        }

        let n_v_a = v_a.filter(item => item.v == false)

        if(n_v_a.length > 0){
            let e_r = `Los campos: \n`

            for(let i = 0; i < n_v_a.length; i++){
                e_r = e_r + `${i + 1}.-${n_v_a[i].f}\n`
            }
            e_r = e_r + `No han sido llenados correctamente. Por favor llenalos para enviar el comentario.`

            alert(e_r)
        }else
            c_f.submit()
    }
})();