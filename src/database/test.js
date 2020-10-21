const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.6244446",
    lng: "-46.5749414",
    name: "Lar dos Meninos",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "999999999",
    images: [
      "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1600712243809-7a3dd4e68fff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/flagged/photo-1576042854593-1f6eebfcfb0c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 08h até 18h",
    open_on_weekends: "1"
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT *  FROM orphanages")
  console.log(selectedOrphanages)

  /*
  //consultar somente 1 orphanage, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  console.log(orphanage)
  
  // deletar dado da tabela
  console.log(await db.all('DELETE FROM orphanages WHERE id = "4"'))
  */
})