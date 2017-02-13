package clapAlong.timely;

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import org.junit.*;


public class JunitTest {
	
	static byte[] str = new byte [50];
	 @Test
	 public void simpleTest(){
		
		 
		 
	 }
	 
 
	/**
	 * Open a port to listen the data submitted from webpage.
	 * @param args
	 * @throws Exception
	 */
	 
	public static void main(String[] args) throws Exception  { 
		// TODO Auto-generated method stub
		ServerSocket ss = new ServerSocket(9090);
		
		Socket s = ss.accept();
//		System.out.println(s.getInetAddress().getHostAddress());
		
		InputStream in = s.getInputStream();
		
		int len = in.read(str);
		/**
		 * This is for testing whether receving data from webpage. No exception if receiving correct data. Throw exception if 
		 * Receiving incorrect data.
		 */
		String tt= new String(str,20,7);
		assertEquals("teacher",tt);
		
		//System.out.println(new String(str,0,len));
		
		PrintWriter out = new PrintWriter(s.getOutputStream(),true);
		
		out.println("This is for Junit Test!");
		s.close();
		ss.close();
		
		
		
		
	} 

}
