export default function handler(request, response) {
  if (request.method == 'POST') {
    return response.status(200).json('우히힛우히힛!!!!');
  }
  if (request.method == 'GET') {
    return response.status(200).json('근하하하하하하');
  }
}
