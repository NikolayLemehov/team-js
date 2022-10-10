export async function setLoading(asyncCb, startLoading, stopLoading) {
  startLoading();
  const res = await asyncCb()
  stopLoading();
  return res;
}