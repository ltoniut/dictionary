import Hash from '../models/hash';

export const postHash = async (req: { key: string; value: string }) => {
  const all = await Hash.find();
  console.log(all);

  const hash = new Hash();
  hash.key = req.key;
  hash.value = req.value;

  const existing = await Hash.find({ key: req.key });

  if (existing) {
    throw new Error(`Hash of key ${req.key} already exists`);
  } else {
    await hash.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  return hash;
};
