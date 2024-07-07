import React from 'react'
import PropTypes from 'prop-types'

const TeamTable = ({ data }) => {
  if (!data) {
    return null
  }

  return (
    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>부서</th>
          <th>성명</th>
          {/* <th>직급</th> */}
          <th>담당업무</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.부서}</td>
            <td>{item.성명}</td>
            {/* <td>{item.직급}</td> */}
            <td>{item.담당업무}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// PropTypes 정의
TeamTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // 데이터 항목의 이름
      detail: PropTypes.string.isRequired, // 데이터 항목의 세부 정보
    })
  ).isRequired, // data prop은 필수
}

export default TeamTable
