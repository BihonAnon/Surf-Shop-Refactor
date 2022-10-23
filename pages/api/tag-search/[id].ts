import { NextApiRequest, NextApiResponse } from 'next'
import { tags } from '../../../data'
import { Tags } from '../../../interfaces'

type ResponseError = {
  message: string
}

export default function tagHandler(
  req: NextApiRequest,
  res: NextApiResponse<Tags | ResponseError>
) {
  const { query } = req
  const { id } = query
  const filtered = tags.filter((p) => p.id === id)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `tags with id: ${id} not found.` })
}
