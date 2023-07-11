'use client'

export const Redeploy = (
  { redeployHook }: {redeployHook: string}
) => {
  const redeploy = async () => {
    const res = await fetch(redeployHook)
    return res.json()
  }
  
  return (
    <button className="hover:font-bold" onClick={() => redeploy()}>
      Redeploy
    </button>
  )
}