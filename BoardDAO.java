package com.spring.model;

import java.util.List;

public interface BoardDAO {

	public List<BoardDTO> getList();
	public void insertBoard(BoardDTO dto);
	public void readCount(int no);
	public BoardDTO content(int no);
	public void updateBoard(BoardDTO dto);
	public void deleteBoard(int no);
	public List<BoardDTO> search(String field, String name);
	
}
