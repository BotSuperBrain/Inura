db.pref.find({dark:{$exists:1}}, {dark:1,transp:1}).forEach(p => {
  const bg = p.dark ? (p.transp ? 400 : 300) : 100;
  db.pref.update({_id: p._id}, {$set:{bg: bg},$unset:{dark:1,transp:1}});
});
