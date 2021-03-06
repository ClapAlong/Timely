package clapAlong.timely.controller;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	
	/**
	 * basic ping to test the functionality
	 * @return
	 */
	@RequestMapping(value = "/timely/hello", method = RequestMethod.GET)
	public static String helloWorld() {
		return "Hello World!";
	}
	
}
