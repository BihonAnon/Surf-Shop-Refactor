import { NextApiResponse, NextApiRequest } from 'next'
import { tags } from '../../../data'
import { Tags } from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Tags[]>
) {
  return res.status(200).json(tags)
}
