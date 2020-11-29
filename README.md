
> # *Kitsune Soft*

# *Links*

[https://trello.com/b/Q7h9sv7h/tcc-frei-kitsune-vet-2020](https://trello.com/b/Q7h9sv7h/tcc-frei-kitsune-vet-2020)

[https://github.com/kitsunesoft20/KitsuneVet](https://github.com/kitsunesoft20/KitsuneVet)

[http://3.92.237.122:3000/](http://3.92.237.122:3000/)

# *Equipe*

>Nicolas Melo Plansky N°35
>
>Daniel Santos do Carmo N°06
>
>Esther Moura de Souza N°09
>
>Lucas Gabriel da Silva N°28
>
>Gabriela Silva Gomes N°12

# Tema
Sistema Veterinario

# *Análise*

## Casos de Uso
Módulos:
>• Acesso 
>
>• Agendamentos
>
>• Perfil

### Acesso
![](https://i.imgur.com/2kaoSdv.png)

001 .É a onde o cliente irá criar o seu perfil e também o perfil de seu Pet, colocando as suas informações requisitadas, como por exemplo, nome, Email, senha, data de nascimento, RG, CPF, telefone, etc... 

002 .Caso o usúario ja tenha um perfil conosco, basta ele efetuar a ação de fazer login, com isso, o usuario terá acesso ao seu perfil e suas informações salvas, como agendamento, vacinação, hospedagem, por exemplo.

003 .Se o usúario esquercer sua senha, ele terá a chance de recuperá-la, o usúario precisa preencher o formulario, e receberá um email de verificação em sua caixa de email. Com isso ele vai conseguir resetar a sua senha e escolher uma nova.

004 .Se um novo funcionario se aliste em nossa empresa, primeiramente ele terá de fazer uma conta de serviço própria da nossa empresa, colocando as mesma informações de funcionario. 



### Agendamentos
![](https://i.imgur.com/3ZlLXEf.png)

001.Após o usúario ja ter cadastrado-se ou ser logado, ele será redirecionado para a pagina home, onde terá as opções de agendamento. Em escolher serviços, o usúario vai poder escolher qual tipo de serviço ele deseja para seu Pet.

001.1.1. Se o Pet estiver precisando de uma cirurgia, nós temos, basta agendar horario, citar as especificações, qual será a cirurgia e tabém as observações.

001.1.2. Temos serviços de banho e tosa, se o usuario se interessar, basta agendar o horario conosco, citar especificações e observações.

001.1.3. Temos serviços para vacinação, o usuario, se tiver enteresse, terá de colocar as informação de qual vacina deseja e também, se necessario, as observações.

001.1.4. Se o usuario precisar agendar um exame sem dores de cabeça, nosso serviço também prepara isso com qualidade.

001.1.5. Se o usúario precisar viajar e não desejar levar seu pet, temos serviços de hospedagem, que funciona semelhante a  um hotel porem para Pets.

002 .Se o usúario se esqueceu dos agendamentos  ou simplesmente deseja consultar seus agendamentos, poderá consultar sem muitas complicações 

### Perfil
![](https://i.imgur.com/ZiQusLm.png)

001 .  É a onde o cliente irá criar o seu perfil e também o perfil de seu Pet, colocando as suas informações requisitadas, como por exemplo, nome, Email, senha, data de nascimento, RG, CPF, telefone, etc...

002.Caso o usúario ja tenha um perfil conosco, basta ele efetuar a ação de fazer login, com isso, o usuario terá acesso ao seu perfil e suas informações salvas, como agendamento, vacinação, hospedagem, por exemplo.


002.1 Se o usúario precisar alterar suas informções de cadastro, se caso o usúario mudar de endereço por exemplo, poderá fazer isso sem problemas.

003 .Se o usúario precisar alterar as informções de cadastro de seu Pet, também é possível.



# *Cronograma*
![](https://i.imgur.com/EzGDw5j.png)


# *Prototipação*

### Home
![](https://i.imgur.com/HgYOJrZ.png)

### Cadastro
![](https://i.imgur.com/pTusdC8.png)

### Login
![](https://i.imgur.com/0lj2CNw.png)

### Alterar Cadastro

![](https://i.imgur.com/ngLVLGE.png)

### Seu Perfil

![](https://i.imgur.com/bhU4xSh.png)![]

### Cadastro do Pet
![](https://i.imgur.com/tGhsG0f.png)

### Banho e Tosa
![](https://i.imgur.com/a5uQ4od.png)

### Vacinação
![](https://i.imgur.com/kOS7vUT.png)

### Hospedagem
![](https://i.imgur.com/Yf9rC49.png)

### Exame
![](https://i.imgur.com/5BECLrp.png)

### Cirurgia
![](https://i.imgur.com/AN8VTS6.png)

### Agendamentos
![](https://i.imgur.com/uArgIlh.png)


# *Wireframe*
![](https://i.imgur.com/7xVsYMb.jpg)


# *MER*
![](https://i.imgur.com/pWn0AaX.png)

```sql=

create database veterinario;

use veterinario;

CREATE TABLE `tb_login` (
	`id_login` INT  PRIMARY KEY AUTO_INCREMENT,
	`ds_email` varchar(100),
	`ds_senha` varchar(100)
);

CREATE TABLE `tb_cliente` (
	`id_cliente` INT PRIMARY KEY AUTO_INCREMENT,
	`id_login` INT,
	`nm_cliente` varchar(100),
	`ds_sexo` varchar(50),
	`dt_nascimento` DATE,
	`ds_email` varchar(100),
	`ds_telefone` varchar(50),
	`ds_cpf` varchar(50),
	`ds_rg` varchar(50),
	`ds_endereco` varchar(100),
	`ds_complemento` varchar(100),
	`ds_cep` varchar(50),
        foreign key (id_login) references tb_login (id_login)
);

CREATE TABLE `tb_funcionario` (
	`id_funcionario` INT PRIMARY KEY AUTO_INCREMENT,
	`id_login` INT,
	`nm_funcionario` varchar(100),
	`ds_emailpessoal` varchar(100),
	 foreign key (id_login) references tb_login (id_login)
);

CREATE TABLE `tb_pet` (
	`id_pet` INT PRIMARY KEY   AUTO_INCREMENT,
	`id_cliente` INT  ,
	`tp_pet` varchar(50)  ,
	`nm_pet` varchar(100)  ,
	`ds_sexo` varchar(50)  ,
	`ds_raca` varchar(100)  ,
	`ds_porte` varchar(50)  ,
	`ds_medicamentos` varchar(255)  ,
	`dt_nascimento` DATE  ,
	`ds_peso` DECIMAL,
        foreign key (`id_cliente`) references tb_cliente (id_cliente)
);

CREATE TABLE `tb_cirurgia` (
	`id_cirurgia` INT PRIMARY KEY AUTO_INCREMENT,
	`id_pet` INT,
	`id_cliente` INT,
	`ds_cirurgia` varchar(100),
	`dt_cirurgia` DATETIME,
	`ds_local` varchar(100),
	`ds_observacoes` varchar(255),
	 foreign key (`id_pet`) references tb_pet (id_pet),
         foreign key (`id_cliente`) references tb_cliente (id_cliente)
);

CREATE TABLE `tb_vacinacao` (
	`id_vacinacao` INT PRIMARY KEY AUTO_INCREMENT,
	`id_cliente` INT,
	`id_pet` INT  ,
	`dt_vacinacao` DATETIME ,
	`ds_vacina` varchar(100) ,
	`ds_local` varchar(100) ,
	`ds_observacoes` varchar(255),
	foreign key (`id_pet`) references tb_pet (id_pet),
	foreign key (`id_cliente`) references tb_cliente (id_cliente)
);

CREATE TABLE `tb_banho_tosa` (
	`id_banho_tosa` INT PRIMARY KEY  AUTO_INCREMENT,
	`id_cliente` INT ,
	`id_pet` INT ,
	`ds_banho` BOOLEAN ,
	`ds_tosa` BOOLEAN ,
	`ds_unhas` BOOLEAN ,
	`ds_dentes` BOOLEAN ,
	`dt_banho_tosa` DATETIME ,
	`ds_local` varchar(100) ,
	`ds_observacoes` varchar(255),
	foreign key (`id_pet`) references tb_pet (id_pet),
	foreign key (`id_cliente`) references tb_cliente (id_cliente)
);

CREATE TABLE `tb_exames` (
	`id_exames` INT PRIMARY KEY AUTO_INCREMENT,
	`Id_cliente` INT  ,
	`id_pet` INT  ,
	`ds_exame` varchar(100)  ,
	`dt_exame` DATETIME ,
	`ds_local` varchar(100) ,
	`ds_observacoes` varchar(255),
	foreign key (`id_pet`) references tb_pet (id_pet),
	foreign key (`id_cliente`) references tb_cliente (id_cliente)
);

CREATE TABLE `tb_hotel` (
	`id_hotel` INT PRIMARY KEY  AUTO_INCREMENT,
	`id_cliente` INT ,
	`id_pet` INT  ,
	`ds_delivery` BOOLEAN,
	`dt_entrada` DATETIME ,
	`dt_saida` DATETIME ,
	`ds_local` varchar(100) ,
	`ds_observacoes` varchar(255),
	foreign key (`id_pet`) references tb_pet (id_pet),
	foreign key (`id_cliente`) references tb_cliente (id_cliente)
);
```

# *Rotas API*

~~~md
    "/" - Tela de Home
    "/cadastro" - Tela de Cadastro
    "/login" - Tela de Login
    "/CadastroPet" - Tela de CadastroPet
    "/agendamentohospedagem" - Tela do agendamento de Hospedagem
    "/agendamentovacina" - Tela do agendamento de Vacina
    "/agendamentocirurgia" - Tela do agendamento de Cirurgia
    "/agendamentoexame" - Tela do agendamento de Exame
    "/agendamentobanhoetosa" - Tela do agendamento do Banho e Tosa
    "/Perfil" - Tela de Perfil
    "/alterarperfil" - Tela de Alterar Perfil
    "/func" - Tela de Menu de funcionário
    "*" NotFound
~~~

# *Testes* *Postman*

### Teste Login
![](https://i.imgur.com/XAa3Q8p.png)

### Teste Cadastro Cliente
![](https://i.imgur.com/ui5cNcF.png)

### Teste Agendamento Cirurgia
![](https://i.imgur.com/rd4NQlI.png)

### Teste Perfil
![](https://i.imgur.com/YVTUiPG.png)