import { useForm } from 'react-hook-form';
import "./style.css"

const TILForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   console.log(data);
  };

  return (
    <div className="form-container">
    <h2>Cadastre-se</h2>
    <hr />
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="empresa">Empresa*</label>
        <input
          type="text"
          placeholder="Nome da empresa"
          id="empresa"
          {...register('empresa', { required: 'O nome da empresa é obrigatório' })}
        />
        {errors.empresa && <p>{errors.empresa.message}</p>}
      </div>
      {/* Nome */}
      <div>
        <label htmlFor="nome">Nome*</label>
        <input
          type="text"
          placeholder="Digite nome"
          id="nome"
          {...register('nome', { required: 'O nome é obrigatório' })}
        />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>
      {/* Cargo */}
      <div>
        <label htmlFor="cargo">Cargo*</label>
        <input
          type="text"
          placeholder="Digite cargo"
          id="cargo"
          {...register('cargo', { required: 'O cargo é obrigatório' })}
        />
        {errors.cargo && <p>{errors.cargo.message}</p>}
      </div>
      {/* TELEFONE */}
      <div>
        <label htmlFor="telefone">Telefone*</label>
        <input
          type="text"
          placeholder="Digite seu telefone"
          id="telefone"
          {...register('telefone', { required: 'O telefone é obrigatório' })}
        />
        {errors.telefone && <p>{errors.telefone.message}</p>}
      </div>
      <div>
        <label htmlFor="email">E-mail*</label>
        <input
          type="text"
          placeholder="Digite seu email"
          id="email"
          {...register('email', { required: 'O email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Digite um e-mail válido"
          }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="cnpj-cpf">CNPJ ou CPF*</label>
        <input
          type="text"
          placeholder="Digite seu CNPJ ou CPF"
          id="cnpj-cpf"
          {...register('cnpj-cpf', { required: 'O cnpj-cpf é obrigatório' })}
        />
        {errors.cnpjCpf && <p>{errors.cnpjCpf.message}</p>}
      </div>
      {/* SENHA */}
      <div>
        <label htmlFor="senha">Senha*</label>
        <input
          type="text"
          placeholder="Digite sua senha"
          id="senha"
          {...register('senha', { required: 'O senha é obrigatório' })}
        />
        {errors.senha && <p>{errors.senha.message}</p>}
      </div>
      <div>
        <label htmlFor="ConfirmeSenha">Confirme sua senha*</label>
        <input
          type="text"
          placeholder="Confirme sua senha"
          id="ConfirmeSenha"
          {...register('ConfirmeSenha', { required: 'O ConfirmeSenha é obrigatório' })}
        />
        {errors.ConfirmeSenha && <p>{errors.ConfirmeSenha.message}</p>}
      </div>
     <a href="#">Formas de pagamento</a>
      <div className="btn-submit">
        <button type="submit" className="btn-btn-submit">Cadastrar</button>
      </div>
    </form>
    <hr className="show-mobile"/>
    <p className="termos"><span>Ao cadastrar-se, você concorda com nossos</span>  Termos de privacidade</p>
    </div>
  )
};

export default TILForm;