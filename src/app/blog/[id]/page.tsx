import { memo } from "react";
const Index = memo(async ({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
    const { id } = await params
    return <div>blog detail page：{id}</div>
})

Index.displayName = 'Index'
export default Index