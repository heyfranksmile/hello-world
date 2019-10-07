package com.spring.model;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDAOimpl implements BoardDAO {

	@Autowired //자동 주입
	private SqlSessionTemplate sqlSession;
	
	
	@Override
	public List<BoardDTO> getList() {
		
		return this.sqlSession.selectList("list"); //selectList("mapper의 아이디") :전체를 다 가져옴 
	}

	@Override
	public void insertBoard(BoardDTO dto) {
		

	}

	@Override
	public void readCount(int no) {
		

	}

	@Override
	public BoardDTO content(int no) {
		
		return null;
	}

	@Override
	public void updateBoard(BoardDTO dto) {
		

	}

	@Override
	public void deleteBoard(int no) {
		

	}

	@Override
	public List<BoardDTO> search(String field, String name) {
		
		return null;
	}

}
